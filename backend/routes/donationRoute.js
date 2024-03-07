import  express  from "express";

import { sendDonationIn } from "../controller/donationIN.js";
import { sendDonationOut } from "../controller/donationOut.js";

import { DonationIN } from "../models/donationInSchema.js";

const router= express.Router();
router.post('/add-donation', sendDonationIn);
router.post('/add-recipient', sendDonationOut);
router.get('/donations', async (req, res) => {
    try {
      const donations = await DonationIN.find({}).exec();
      res.json(donations);
    } catch (error) {
      console.error('Error fetching donations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;