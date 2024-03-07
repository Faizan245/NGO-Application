import ErrorHandler from "../error/error.js";


import { Expenses } from "../models/expensesSchema.js";


export const sendExpenses = async (req, res, next) => {
  const { member_id, memberName, expense, expAmount, description } = req.body;
  if (!member_id || !memberName || !expense || !expAmount || !description ) {
    return next(new ErrorHandler("Please Fill Full Registration Form!", 400));
  }

  try {
    await Expenses.create({ member_id, memberName, expense, expAmount, description });
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
