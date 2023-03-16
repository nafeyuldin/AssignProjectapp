import React, {useState} from 'react'
import { checkIcon,leftIcon, confirmIcon,  activecheckIcon } from '../assets/icons'
import { NavLink } from 'react-router-dom';

const Status = () => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  const handleItemClick = (index) => {
    if (checkedIndex === index) {
      setCheckedIndex(-1); // uncheck if item is already checked
    } else {
      setCheckedIndex(index); // check new item
    }
  }

  return (
    <div className='users pb-[187px] h-auto w-full relative'>
      <div className="navigation flex items-center justify-between py-[25px] bg-[#232323] px-[23px]">
<NavLink to='/users'>
  <img src={leftIcon} alt="" className='w-[7px] h-[21px]' />
</NavLink>
<h1 className='text-white text-[20px] font-[400] '>Filters</h1>
<NavLink to='/userdetails'>
  <img src={confirmIcon} alt="" className='w-[24.48px] h-[24.48px]' />
</NavLink>
    </div>
      <h1 className='text-[24px] w-[calc(100% - 42px)] mx-[21px] text-white font-bold  gap-[27px]  px-[0px] py-[30px]'>
        Status
      </h1>
      <ul className='flex w-[calc(100% - 42px)] mx-[21px] rounded-[16px] flex-col  h-full'>
        <li>
          <a href="">Liam</a>
          <img
            onClick={() => handleItemClick(0)}
            src={checkedIndex === 0 ? activecheckIcon : checkIcon}
            alt=""
          />
        </li>
        <li>
          <a href="">Olivia</a>
          <img
            onClick={() => handleItemClick(1)}
            src={checkedIndex === 1 ? activecheckIcon : checkIcon}
            alt=""
          />
        </li>
        <li>
          <a href="">Noah</a>
          <img
            onClick={() => handleItemClick(2)}
            src={checkedIndex === 2 ? activecheckIcon : checkIcon}
            alt=""
          />
        </li>
        <li>
          <a href="">Olivia</a>
          <img
            onClick={() => handleItemClick(3)}
            src={checkedIndex === 3 ? activecheckIcon : checkIcon}
            alt=""
          />
        </li>
      </ul>
    </div>
  )
}

export default Status;
