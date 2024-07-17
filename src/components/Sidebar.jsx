import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutube } from "react-icons/si";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiPlaylistBold } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className='p-3 w-56 text-xs font-medium opacity-75 overflow-y-auto'>
      <div className='flex border-b border-white  flex-col p-4 gap-4'>
          
          <div className='flex flex-row items-center gap-3'>
            <button>
              <FaHome size={26}/>
            </button>
            <span>Home </span>
          </div>

          <div className='flex flex-row items-center gap-3'>
            <button>
              <SiYoutubeshorts size={26}/>
            </button>
            <span>Shorts</span>
          </div>
          
          <div className='flex flex-row items-center gap-3'>
            <button>
              <MdSubscriptions size={26}/>
            </button>
            <span>Subscription</span>
          </div>

      </div>

      <div className='flex flex-col border-b border-white  p-4 gap-4'>
        <h1>You</h1>
        
        <div className='flex flex-row items-center gap-3'>
          <button>
            <SiYoutube size={26}/>
          </button>
          <span>
            Your Channel
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaClockRotateLeft size={26}/>
          </button>
          <span>
            History
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
              <PiPlaylistBold size={26}/>
          </button>
          <span>
            Playlist
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
              <BiLike size={26}/>
          </button>
          <span>
              Liked Videos
          </span>
        </div>

      </div>

      <div className='flex border-b border-white  flex-col p-4 gap-4'>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaRegCircleUser size={26}/>
          </button>
          <span>
            User1
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaRegCircleUser size={26}/>
          </button>
          <span>
            User2
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaRegCircleUser size={26}/>
          </button>
          <span>
            User3
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaRegCircleUser size={26}/>
          </button>
          <span>
            User4
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <FaRegCircleUser size={26}/>
          </button>
          <span>
            User5
          </span>
        </div>

      </div>




      <div className='flex border-b border-white  flex-col p-4 gap-4'>
        
        <div className='flex flex-row items-center gap-3' >
          <button>
            <IoSettingsSharp size={26}/>
          </button>
          <span>
            Settings
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
            <MdOutlineLiveHelp size={26}/>
          </button>
          <span>
            Help
          </span>
        </div>

        <div className='flex flex-row items-center gap-3'>
          <button>
              <RiFeedbackFill size={26}/>
          </button>
          <span>
              Send Feedback
          </span>
        </div>


      </div>
      
      <div className='flex flex-col border-b border-white  p-4 gap-4'>
        <h2>
        About Press Copyright Contact us C reator Advertise Developers
        </h2>
        <h2>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
        © 2024 Google LLC</h2>
        
      </div>
    </div>
  )
}

export default Sidebar
