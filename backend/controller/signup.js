import ErrorHandler from "../error/error.js";

import User from "../models/userSchema.js"


const signup = async (req, res, next) => {
  const { fullname, username, phone, password, zone_id, role } = req.body;
  if (!fullname || !username || !phone || !password || !zone_id || !role) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    await User.create({ fullname, username, phone, password, zone_id, role });
    res.status(200).json({
      success: true,
      message: "Registered Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    // if (error.code === 'ValidationError') {
    //   const validationErrors = Object.values(error.errors).map(err => err.message);
    //   return res.status(200).json({
    //     success: false,
    //     message: validationErrors.join(', '),
    //   });
    // }
    if (error.code === 11000) {
      
      return res.status(200).json({
        success: false,
        message: "User already exist with given details.",
      });
    }
    

    // Handle other errors
    return next(error);
  }
};
export default signup;