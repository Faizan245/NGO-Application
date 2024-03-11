import ErrorHandler from "../error/error.js";

import { DonationIN } from "../models/donationInSchema.js";


export const sendDonationIn = async (req, res, next) => {
  const { member_id, memberName, fullName, fatherName, amountInWords, amountInFigures, currency, date, city, phone } = req.body;
  if (!member_id || !memberName || !fullName || !fatherName || !amountInWords || !amountInFigures || !currency || !date || !city || !phone) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    await DonationIN.create({ member_id, memberName, fullName, fatherName, amountInWords, amountInFigures,currency , date, city, phone });
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

