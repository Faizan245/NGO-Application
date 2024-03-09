
import User from "../models/userSchema.js";
import bcrypt from 'bcrypt'

const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      // Check password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // If username and password are correct, return success
      res.status(200).json({
         message: 'Login successful',
         user_id: user.user_id,
         role : user.role,
         username: user.username,
         });
      
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
  };

export default login;