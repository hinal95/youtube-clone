import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { getToken, getUsername } from '../data/auth';



const Header = () => {
  const navigate = useNavigate();
  const token = getToken();
  const username = getUsername();

  return (
    <div>
      <header className="flex  justify-between items-center p-6  h-20 z-40 sticky overflow right=0 left=0 top-0">
        <div className="flex items-center gap-4 ">
            <div className='ml-2 flex gap-1'>
              <img src='https://img.icons8.com/?size=100&id=19318&format=png&color=000000' className='h-10  sm:flex sm:items-center'></img>
              <h1 className="text-xl font-bold text-black mt-1 sm:block hidden">YouTube</h1>
            </div>
        </div>
        <div className='w-2/3 flex'>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => navigate(`/?q=${e.target.value}`)}
            className="border rounded-l-2xl px-3 py-1 w-2/3 sm:w-1/2 md:w-2/3"
          />
          <span className='text-2xl bg-gray-400 p-2 w-14  rounded-r-2xl font-bold'><CiSearch /></span>
        </div>
        <div>
          {!token ? (
            <button onClick={() => navigate('/login')} className="mr-5 text-gray-500 border p-2 rounded">
              Sign In
            </button>
          ) : (
            <span className="text-gray-800 font-medium "> welcome,{username}</span>
          )}
        </div>
      </header>
    </div>
  )
}

export default Header