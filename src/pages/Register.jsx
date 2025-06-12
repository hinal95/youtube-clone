import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
   


  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('/api/register', form);
    localStorage.setItem('username', form.username);
    navigate('/login');
  } catch (error) {
    console.error(" Registration error:", error);
    alert("Registration failed ");
  }
};
  return (
    <div >
        <div className=' h-96 w-72   shadow-xl ml-96 mt-10'>
            <h2 className='flex justify-center items-center font-bold text-2xl mt-4 '>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className='ml-4 '><strong>Name</strong></label>
                    <br></br>
                    <input name="username" id='username' onChange={handleChange} placeholder="Username"
                     className='form-control rounded-0 border p-1 w-62 ml-5'></input>

                </div>
                <br></br>
                 <div>
                    <label htmlFor="email" className='ml-4'><strong>Email</strong></label>
                    <input name="email" id='email' onChange={handleChange} placeholder="Email" type='text'
                      autoComplete="email" className='form-control rounded-0 border p-1 w-62 ml-5'></input>

                </div>
                <br></br>
                <div>
                    <label htmlFor="password" className='ml-4'><strong>Password</strong></label>
                    <input name="password" id='password' type="password" onChange={handleChange} placeholder="Password"
                     autoComplete="current-password" className='form-control rounded-0 border p-1 w-62 ml-5'></input>

                </div>
                
                    <button type='submit' className='mt-5 ml-4 p-1 shadow-md hover:bg-green-800 w-62 bg-green-700 font-medium'>Register</button>
           
                    
              
                <div className='w-62 p-1 ml-4 border mt-2 rounded-0 bg-light px-22 shadow-md hover:bg-gray-100'>
                     <Link to='/login' >login</Link>
                </div>
              </form>     
                
          
        </div>
         
    </div>
  
  )
}

export default Register


