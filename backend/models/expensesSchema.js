import mongoose from "mongoose";


const ExpensesSchema = new mongoose.Schema({
    memberName :{
        type: String,     
    },
    member_id:{
        type: String,
    },
    expense:{
        type: String,
        required: true
    },
    expAmount:{
        type: String,
        required: true
    },
    currency:{
        type: String,
        required: true
    },
    description:{
        type: String,
        minLength: [5, "description must contain at least 3 characters"],
    }
})    
export  const Expenses = mongoose.model("Expenses",ExpensesSchema)