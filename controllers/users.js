import User from "../models/Users.js"


// Update User
export const updateUser = async (req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new : true})
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error);
    }
}

// Delete User
export const deleteUser = async (req,res,next)=>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has Been Deleted.")
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get User
export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
}

// Get All Users

export const getAll = async (req,res,next)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error);
    }
}

