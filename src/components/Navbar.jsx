import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants.js';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center'>
      <p className='font-poppins font-bold text-white text-[38px] w-[124px] h-[32px]'><span className="text-teal-500">Go</span>Nime</p>
      <input type="text" placeholder='search' className="px-3 py-2 rounded-xl w-[500px] bg-slate-200 text-black focus:outline-none focus:ring-teal-500 focus:ring-1 text-lg focus:border-teal-500"/>


      {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            )
            )}
          </ul>
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar