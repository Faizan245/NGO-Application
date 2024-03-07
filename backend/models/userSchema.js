import mongoose from "mongoose";
const schema=mongoose.Schema;

const userSchema = new mongoose.Schema({
      user_id: {
        type: String,
        default : () => Date.now().toString() ,
        
      },
      fullname:{
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],
      },
      username: {
        type: String,
        required: true,
        unique: true
      },
      phone: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        
      },
      zone_id: {
        type: String,
        required: true,
      },
      creationDate: {
        type : String,
        default : () => (new Date()).toISOString() ,
      },
      role : {
        type : String,
        required : true
      }

})    

const User = mongoose.model("users",userSchema)
export default User;