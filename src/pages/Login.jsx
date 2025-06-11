import React, { useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import { setToken } from '../data/auth'
import axios from '../data/axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://youtube-clone-backend-1-4jg5.onrender.com/api/login", {email,password},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
       localStorage.setItem('token', res.data.token);
        navigate('/');
    }
    catch (err) {
      console.error('Login failed:', err);
    }
  };
  return (
    <div>
      <div className=' h-96 w-72   shadow-xl ml-80 py-10 mt-16'>
        <h2 className='flex justify-center items-center font-bold text-2xl mt-4 '>Login</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='ml-4'><strong>Email</strong></label>
            <input type='email' placeholder='enter email' name='email'
              autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}
              className='form-control rounded-0 border p-1 w-62 ml-5'></input>

          </div>
          <br></br>
          <div>
            <label htmlFor='email' className='ml-4'><strong>Password</strong></label>
            <input type='password' placeholder='enter password' name='password'
              autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}
              className='form-control rounded-0 border p-1 w-62 ml-5'></input>

          </div>

          <button type='submit' className='mt-5 ml-4 p-1 shadow-md hover:bg-green-800 w-62 bg-green-700 font-medium'>login</button>

        </form>
      </div>
    </div>
  )
}

export default Login;

