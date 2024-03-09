import  express  from "express";
import { Expenses } from "../models/expensesSchema.js";

import { sendExpenses } from "../controller/expenses.js";

const router= express.Router();

router.post('/add-expenses', sendExpenses);
router.get('/show-expenses', async (req, res) =>{
    try {
      const expenses = await Expenses.find({}).exec();
        res.json(expenses);
    } catch (error) {
      console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  })

export default router;