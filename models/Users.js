import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
}, 
{timestamps: true}
);

export default mongoose.model("User", userSchema);