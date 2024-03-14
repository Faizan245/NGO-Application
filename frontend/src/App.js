
import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from "./screens/Home";
import Donate from './screens/Donate';
import Login from './screens/Login';
import Signup from './screens/Signup.js';
import { AuthProvider } from './context/AuthContext';
import Member from './screens/Member';
import Admin from './screens/Admin';

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/:token' element={<Home/>}/>
          <Route path='/member' element={<Member/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
