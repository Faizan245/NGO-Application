import ErrorHandler from "../error/error.js";

import { DonationOut } from "../models/donationOutSchema.js";


export const sendDonationOut = async (req, res, next) => {
  const { member_id, memberName, fullName, fatherName, age, amountInWords, amountInFigures, date, city, phone, state, modeOfTransfer } = req.body;
  if (!member_id || !memberName || !fullName || !fatherName || !age || !amountInWords || !amountInFigures|| !date || !city || !state || !phone || !modeOfTransfer) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    await DonationOut.create({ member_id, memberName, fullName, fatherName, age, amountInWords, amountInFigures, date, city, state, phone, modeOfTransfer });
    res.status(201).json({
      success: true,
      message: "Registered Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};