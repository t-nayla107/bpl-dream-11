import React, { useState } from 'react';

const Banner = () => {

  const [credit, setCredit] = useState(0);

  const handleClaimFreeCredit = (moreCredit = 5200000) => {
    const newCredit = credit + moreCredit;
    setCredit(newCredit);
  }

    return (
        <div class="relative bg-gradient-to-r from-black via-gray-800 to-purple-900">
  
  <img src="/src/assets/images/bg-shadow.png" alt="Background" className="w-full h-auto"></img>

  <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10">
    <img src="/src/assets/images/banner-main.png" alt="Top Banner" className='w-[250px] h-[190px]'></img>
    <div className='m-3 p-3'><h1 className='text-2xl p-3 font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p className='text-lg p-3 text-gray-500'>Beyond Boundaries Beyond Limits</p>
    <button onClick={() => handleClaimFreeCredit(credit)} className='bg-lime-400 p-3 text-black font-medium rounded-full border-double'>Claim Free Credit</button></div>
  </div>
</div>

    );
};

export default Banner;