import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMic } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' flex flex-row justify-between h-fit w-full p-1 border-b border-opacity-25 border-white'>

      <div className='flex flex-row items-center gap-3 '>
        <IoReorderThreeOutline size={34}/>
        <div className=' flex flex-row h-8 w-8 gap-2 align-middle'>
             <span>
                <FaYoutube size={34}/>
             </span>
            <h1 className='text-xl text-white'>Youtube</h1>
        </div>
      </div>

    <div className='flex flex-row w-1/2 gap-2 items-center'>
      <div className='flex flex-row w-3/4 items-center border-white  border border-opacity-25 rounded-full px-4 py-1'>
        <input type="text" placeholder='Search' className=' w-full focus:outline-none bg-transparent text-xl text-white'/>
        <button className='bg-white opacity-45   '>
            <FaSearch size={34} className=' bg-gray-900 p-1 rounded-1 color-white hover:cursor-pointer'/>
        </button>
      </div>
      {/* <button className='bg-white opacity-35 rounded-full p-2'> */}
          <IoMic size={35} className='rounded-full bg-gray-800 p-1 color-white hover:cursor-pointer'/>
      {/* </button> */}
      </div>
    
      
      <div className='flex flex-row justify-center items-center gap-5'>
        <FaBell size={34} className='rounded-full bg-gray-800 p-1 color-white hover:cursor-pointer'/>
        <IoPersonCircleOutline size={34}/> 
      </div>
    </div>
  )
}

export default Header
