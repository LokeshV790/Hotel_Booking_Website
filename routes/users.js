import express from "express";
import { deleteUser, getAll, getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

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