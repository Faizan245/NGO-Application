import  express  from "express";


import { sendExpenses } from "../controller/expenses.js";

const router= express.Router();

router.post('/add-expenses', sendExpenses);

export default router;