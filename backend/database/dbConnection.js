import mongoose from "mongoose";
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "registration"
    })
    .then(()=>{
        console.log("MongoDB Connected Successfully");
    }).catch((err)=>{
        console.log(`some error in connection to database ${err}`)
    })
};
export default dbConnection; 