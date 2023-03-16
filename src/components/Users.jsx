import React, {useState} from 'react'
import {rightIcon,plusIcon, leftIcon, confirmIcon, burgerIcon, activeburgerIcon} from '../assets/icons';
import { NavLink } from 'react-router-dom';
const Users = () => {
  const [activeburger, setactiveBurger] = useState(false)
  return (
    <div className='users p-0 h-auto w-full relative'>
    <div className="navigation flex items-center justify-between py-[25px] bg-[#232323] px-[23px]">
<NavLink to='/'>
  <img src={leftIcon} alt="" className='w-[7px] h-[21px]' />
</NavLink>
<h1 className='text-white text-[20px] font-[400] '>Users</h1>
<NavLink to=''>
  <img src={plusIcon} alt="" className='w-[24.48px] h-[24.48px]' />
</NavLink>
    </div>
      
         <ul className='flex  m-[21px] rounded-[16px] flex-col w-[calc(100% - 42px )] h-full'>
         <NavLink to='/status'>
        <li >
          <a href="">Liam</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
        <a href="">Olivia</a>
        <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Noah</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Olivia</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Charlotte</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Amelia</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Elijah</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">John</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>
        <NavLink to='/status'>
        <li>
          <a href="">Noah Smith</a>
          <img src={rightIcon} alt="" />
        </li>
        </NavLink>


      </ul>
      <img onMouseEnter={() => setactiveBurger(true)} onMouseLeave={() => setactiveBurger(false)} src={activeburger ? activeburgerIcon : burgerIcon} alt="" className='h-[45.33px]  left-[184px] absolute bottom-[34.67px] w-[45.33px]' />
    </div>
  )
}

export default Users