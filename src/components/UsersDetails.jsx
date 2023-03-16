import React, {useState} from 'react'
import {activeUserIcon,leftIcon,deleteIcon, tvIcon, activetvIcon, historyIcon, activehistoryIcon, activefingerprintIcon, editIcon, userIcon, rightIcon, activeRightIcon, fingerprintIcon,} from '../assets/icons';
import { NavLink } from 'react-router-dom';


const UsersDetails = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);

  return (
    <div className='userdetails sm:h-[100vh] pb-[187px]  h-auto '>
      <div className="navigation flex items-center justify-between py-[25px] bg-[#232323] px-[23px]">
<NavLink to='/status'>
  <img src={leftIcon} alt="" className='w-[7px] h-[21px]' />
</NavLink>
<h1 className='text-white text-[20px] font-[400] '>Filters</h1>
<NavLink to=''>
  <img src={deleteIcon} alt="" className='w-[20px] h-[25px]' />
</NavLink>
    </div>
     <div className="userProfile   rounded-[15px] px-[30px] mx-[21px] w-[calc(100% - 42px)] mt-[22px] justify-between items-center  py-[22px] flex">
       <div className="profile flex gap-[27px] items-center  ">
        <div className="profileImage text-[24px] flex items-center justify-center h-[58px] w-[58px] bg-[#000000] text-white rounded-full">
          L
        </div>
        <div className="userName">
        <h1 className='text-[18px] text-white font-[400]'>Lima</h1>
        <h2 className='text-[14px] text-[#6BCA04] font-[400]' >Active</h2>
        </div>

       </div>
       <img src={editIcon} alt="" className=' cursor-pointer h-[17.38px] w-[17.38px]' />
     </div>
     <div className="assigmentDetails">
     <h1 className='text-[24px] text-white font-bold  gap-[27px]  p-[33px]'>
        Assignment
      </h1>
      <ul className='  flex flex-wrap gap-[27px] mx-[21px] w-[calc(100% - 42px)]  ml-[27px] items-center  '>
        <NavLink to="/users">
          <li
            onMouseEnter={() => {
              setActive1(false)
            }}
            onMouseLeave={() => {
              setActive1(true)
            }}

            className='h-[160px] cursor-pointer relative w-[160px]  bg-transparent hover:bg-white border-[1px] border-[#606167] rounded-[26px]'>
            <img src={!active1 ? activetvIcon : tvIcon} alt="" className='h-[29px] text-black w-[38px] absolute top-[31px] left-[24.58px]' />
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
            <img src={!active3 ? activefingerprintIcon : fingerprintIcon} alt="" className='h-[31px] text-black w-[24px] absolute top-[31px] left-[24.58px]' />
            <span className='absolute top-[111px] flex items-center justify-between left-[25px] w-[calc(100%-50px)]'>
              <p className={!active3 ? 'text-black' : 'text-white'}>Sync all</p>
              <img src={!active3 ? activeRightIcon : rightIcon} alt="" className='w-[5.15px] h-[15.44px]' />

            </span>
          </li>
        </NavLink>
      </ul>
     </div>
    </div>
  )
}

export default UsersDetails