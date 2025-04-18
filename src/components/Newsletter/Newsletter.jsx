import React from 'react';

const Newsletter = () => {
    return (
        <>
        <div>
            <section className='p-5 relative w-full h-[300px] border border-gray-300 rounded-2xl pointer-events-none'>
                <img src="/src/assets/images/bg-shadow.png" alt="" className='w-full h-full object-cover rounded-2xl' />
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-black'>
                <h1 className='font-bold text-2xl p-2'>Subscribe to our Newsletter</h1>
                <p className='font-medium text-gray-500 py-2'>Get the latest updates and news right in your inbox!</p>
                <form className='flex items-center gap-4 justify-center'>
                    <input className='border px-4 py-2 w-[500px] rounded-xl' type="text" placeholder='Enter your email' />
                    <button className='px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-400 to-yellow-400'>Subscribe</button>
                </form></div>
            </section>
        </div>
        </>
    );
};

export default Newsletter;