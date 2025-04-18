import React from 'react';
import { TbCoinFilled } from "react-icons/tb";
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between px-6 py-4 bg-white'>
          <div><img src="/src/assets/images/logo (5).png" alt="" /></div>
        <ul className='hidden md:flex space-x-6 text-gray-700 font-medium items-center'>
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <div className='rounded-full p-3 m-3 border'><span className='flex gap-2 items-center'><span>0</span> coin<TbCoinFilled></TbCoinFilled></span>
            </div></ul>
      </nav>
    </>
  );
};

export default Navbar;
