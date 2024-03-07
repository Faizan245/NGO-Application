
import User from "../models/userSchema.js";


// const login = async (req, res, next) => {
//     const { email, password } = req.body;

//     let existingUser;
//     try {
//         existingUser = await User.findOne({ email: email });
//     } catch (err) {
//         return new Error(err);
//     }
//     if (existingUser) {
//         // Compare provided password with stored password
//         if (existingUser.password === password) {
//           return true; // Passwords match, authentication successful
//         }
//       }
      
//     if (!existingUser) {
//         return res.status(400).json({ message: "User not found. Signup Please" });
//     }
    
    
// }
const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      console.log(user);
      // Check password
      if (user.password !== password) {
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