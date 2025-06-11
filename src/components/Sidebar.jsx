import React, { useState } from 'react'
import { IoMdHome,IoIosSettings,IoIosDownload  } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from 'react-router-dom';
import { MdHistory, MdVideoLibrary, MdWatchLater,MdHelpOutline,MdOutlineSubscriptions } from "react-icons/md"
import '../data/siderbar.css'

const Sidebar = () => {

let [ isOpen,setisOpen] = useState(true)
  function toggleSidebar(){
   setisOpen(!isOpen)
  }

  return (
    <div className= {`sidebar ${isOpen ? 'open' : 'close'}`}>
   
      <div className='mt-5 bg-gray-200'   >
          
       <div className='bg-gray-600 h-10 align-top'>
         <button className='toggle-btn' onClick={toggleSidebar} ></button>
       </div>
       
       <div className='h-screen bg-gray-200 '>
        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer mt-4'>
          <span className='text-2xl mr-4'><IoMdHome /></span>
          {isOpen && <Link to="/" className="text-sm font-medium">Home</Link>}
        </li>

        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer'>
          <span className='text-2xl mr-4'><SiYoutubeshorts /></span>
         {isOpen && (<span className='text-sm font-medium'>Shorts</span>)} 
        </li>

        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer'>
          <span className='text-2xl mr-4'><MdOutlineSubscriptions /></span>
         {isOpen && ( <span className='text-sm font-medium'>Subscription</span> )}
        </li>
        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer'>
          <span className='text-2xl mr-4 '><IoIosDownload /></span>
          {isOpen && (<span className='text-sm font-medium'>Dowloads</span> )}
        </li>

        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer' >
          <span className='text-2xl mr-4'><MdHistory /></span>
          {isOpen && (<span className='text-sm font-medium'>History</span> )}
        </li>

        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer' >
          <span className='text-2xl mr-4'><MdVideoLibrary /></span>
          {isOpen &&(<span className='text-sm font-medium'>Your Videos</span> )}
        </li>

        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer' >
          <span className='text-2xl mr-4'><MdWatchLater /></span>
          {isOpen && (<span className='text-sm font-medium'>Watch Later</span>)}
        </li>
        <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer' >
            <span className='text-2xl mr-4'><IoIosSettings /></span>
           {isOpen && ( <span className='text-sm font-medium'>Settings</span>)}
          </li>
         <li className='hover:bg-gray-300 p-4 rounded-lg w-full flex items-center cursor-pointer' >
            <span className='text-2xl mr-4'><MdHelpOutline /></span>
           {isOpen &&( <span className='text-sm font-medium'>Help</span>)}
          </li>
     </div>
         
    </div>


  </div>

  )
}



export default Sidebar