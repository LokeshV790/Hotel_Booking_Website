import express from "express";
import { deleteUser, getAll, getUser, updateUser } from "../controllers/users.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauth", verifyToken, (req, res, next)=>{
    res.send("Hello, Your are logged in")
})

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

// Get
router.get("/:id", getUser);

// Get All
router.get("/", getAll);

router.get("/", (req,res)=>{
    res.send("hello, this is Users end")
})

export default router;