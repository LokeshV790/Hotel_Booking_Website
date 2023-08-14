import express from "express";
import Hotel from "../models/Hotels.js"
import { createHotel, deleteHotel, getAll, getHotel, updateHotel } from "../controllers/hotels.js";

import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", createHotel);

// Update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel);

// Get
router.get("/:id", getHotel);

// Get All
router.get("/", getAll);

router.get("/", (req,res)=>{
    res.send("hello, this is hotels end")
})

export default router;