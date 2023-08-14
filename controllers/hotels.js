export const createHotel = async (req,res,next)=>{
    const newHotel = new  Hotel(req.body)
    
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    } catch (error) {
        next(err);
    }
}

export const updateHotel = async (req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new : true})
        res.status(200).json(updateHotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteHotel = async (req,res,next)=>{
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel Has Been Deleted.")
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getHotel = async (req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAll = async (req,res,next)=>{
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (error) {
        res.status(500).json(error);
    }
}

