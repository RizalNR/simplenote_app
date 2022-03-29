import React from 'react'
import {Link} from 'react-router-dom'
import {FcHome, FcPlus, FcSettings} from 'react-icons/fc'
import {AiOutlineLogout} from 'react-icons/ai'

const BottomNav = () => {
  return (
      <div className='fixed bottom-0 left-0 p-3 w-screen h-20'>
        <nav className='w-full h-full flex items-center justify-between  bg-yellow-400 text-white rounded-full shadow-md'>

            <Link className='h-full flex-1 flex justify-center items-center text-2xl' to={"/dashboard/home"}>
                <FcHome/>
            </Link>

            <Link className='h-full flex-1 flex justify-center items-center text-2xl' to={"/dashboard/createnote"}>
                <FcPlus/>
            </Link>

            <Link className='h-full flex-1 flex justify-center items-center text-2xl' to={"/dashboard/setting"}>
                <FcSettings/>
            </Link>

        </nav>
      </div>
  )
}

export default BottomNav