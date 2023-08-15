import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        console.log("Received registration request for:", username, email);

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        console.log("Generated hash:", hash);

        const newUser = new User({
            username,
            email,
            password: hash,
        });

        await newUser.save();
        console.log("User has been created:", newUser);

        res.status(200).send("User has been created.");
    } catch (error) {
        console.error("Error while registering user:", error);
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404, "User Not found!"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "Wrong Password"));
        const {password, isAdmin, ...otherDetails } = user._doc;
        res.status(200).json(otherDetails);
    } catch (error) {
        console.error("Error while registering user:", error);
        next(error);
    }
};
