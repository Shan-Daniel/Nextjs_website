import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id:{type: String, reuired: true },
    name:{type: String, reuired: true },
    email:{type: String, reuired: true, unique: true },
    imageUrl:{type: String, reuired: true },
    cartItems:{type:Object, default: {}}
},{minimize: false})

const User = mongoose.models.user || mongoose.model('User',userSchema)
export default User;