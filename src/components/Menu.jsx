import React, { useState } from 'react'
import { activeUserIcon, reloadIcon, historyIcon, activehistoryIcon, activereloadIcon, userIcon, rightIcon, activeRightIcon } from '../assets/icons';
import homeImage from '../assets/images/home-overlay.png'
import { NavLink } from 'react-router-dom';
const Menu = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);



  return (
    <div className='menu h-[100vh] w-full  bg-yellow-500'>
      <h1 className='text-[24px] text-white font-bold  gap-[27px]  p-[33px]'>Menu</h1>
      <ul className='  flex flex-wrap gap-[27px]  ml-[27px] items-center  '>
        <NavLink to="/users">
          <li
            onMouseEnter={() => {
              setActive1(false)
            }}
            onMouseLeave={() => {
              setActive1(true)
            }}

            className='h-[160px] cursor-pointer relative w-[160px]  bg-transparent hover:bg-white border-[1px] border-[#606167] rounded-[26px]'>
            <img src={!active1 ? activeUserIcon : userIcon} alt="" className='h-[32.75px] text-black w-[32.75px] absolute top-[31px] left-[24.58px]' />
            <span className='absolute top-[111px] flex items-center justify-between left-[25px] w-[calc(100%-50px)]'>
              <p className={!active1 ? 'text-black' : 'text-white'}>Users</p>
              <img src={!active1 ? activeRightIcon : rightIcon} alt="" className='w-[5.15px] h-[15.44px]' />

            </span>
          </li>
        </NavLink>
        <NavLink to="/">

          <li

            onMouseEnter={(mouseEnter) => {
              setActive2(false)
            }}
            onMouseLeave={() => {
              setActive2(true)
            }}

            className='h-[160px] cursor-pointer relative w-[160px]  bg-transparent hover:bg-white border-[1px] border-[#606167] rounded-[26px]'>
            <img src={!active2 ? activehistoryIcon : historyIcon} alt="" className='h-[32.75px] text-black w-[32.75px] absolute top-[31px] left-[24.58px]' />
            <span className='absolute top-[111px] flex items-center justify-between left-[25px] w-[calc(100%-50px)]'>
              <p className={!active2 ? 'text-black' : 'text-white'}>History</p>
              <img src={!active2 ? activeRightIcon : rightIcon} alt="" className='w-[5.15px] h-[15.44px]' />
            </span>
          </li>
        </NavLink>
        <NavLink to="/">

          <li

            onMouseEnter={(mouseEnter) => {
              setActive3(false)
            }}
            onMouseLeave={() => {
              setActive3(true)
            }}

            className='h-[160px] cursor-pointer relative w-[160px]  bg-transparent hover:bg-white border-[1px] border-[#606167] rounded-[26px]'>
            <img src={!active3 ? activereloadIcon : reloadIcon} alt="" className='h-[32.75px] text-black w-[32.75px] absolute top-[31px] left-[24.58px]' />
            <span className='absolute top-[111px] flex items-center justify-between left-[25px] w-[calc(100%-50px)]'>
              <p className={!active3 ? 'text-black' : 'text-white'}>Sync all</p>
              <img src={!active3 ? activeRightIcon : rightIcon} alt="" className='w-[5.15px] h-[15.44px]' />

            </span>
          </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Menu