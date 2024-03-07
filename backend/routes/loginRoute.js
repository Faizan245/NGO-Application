import  express  from "express";
// import User from "../models/userSchema.js";

import login from "../controller/login.js"

const router= express.Router();
router.post('/login', login);

// router.get('/userCred', async (req, res) =>{
//     try {
//         const data = await User.find({}).exec();
//         res.json(data);
        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// })

export default router;