import  express  from "express";

import { sendDonationIn } from "../controller/donationIN.js";
import { sendDonationOut } from "../controller/donationOut.js";

import { DonationIN } from "../models/donationInSchema.js";
import { DonationOut } from "../models/donationOutSchema.js";

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
router.get('/recipients', async (req, res) =>{
  try {
    const recipients = await DonationOut.find({}).exec();
      res.json(recipients);
  } catch (error) {
    console.error('Error fetching recipients:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
})

export default router;