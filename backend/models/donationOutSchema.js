import mongoose from "mongoose";


const DonationOutSchema = new mongoose.Schema({
    memberName :{
        type: String,     
    },
    member_id:{
        type: String,
    },
    fullName: {
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],
    },
    fatherName: {
        type: String,
        required: true,
        minLength: [3, "Name must contain at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],
    },
    age: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "phone number must contain 10 digits"],
        maxLength: [10, "phone cannot exceed 10 digits"],
    },
    amountInWords:{
        type: String,
        required: true,
    },
    amountInFigures:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
    },
    reason:{
        type: String,
    },
    modeOfTransfer :{
        type: String,
        required: true
    }

})    
export  const DonationOut = mongoose.model("DonationOut",DonationOutSchema)