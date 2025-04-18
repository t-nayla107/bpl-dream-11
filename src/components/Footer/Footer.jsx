import React from 'react';

const Footer = () => {
    return (
        <>
        <div className='bg-black'>
            <div className='p-10 flex flex-col items-center justify-center mt-5'>
                <img src='/src/assets/images/logo-footer.png' className='w-[150px] h-[100px] mb-28'></img>
            <div className='grid grid-cols-3 justify-between gap-14'>
                <div className='mr-10 text-left'>
                    <h1 className='text-xl pb-4 font-medium text-white'>About Us</h1>
                    <p className='text-gray-400'>We are a passionate team dedicated to providing the best services to our customers</p>
                </div>
                <div className='mr-10 text-left'>
                    <h1 className='text-white pb-4 font-medium text-xl'>Quick Links</h1>
                    <ol className='text-gray-400 pb-2'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ol>
                </div>
                <div className='ml-4 text-left'>
                    <h1 className='text-white pb-4 font-medium text-xl'>Subscribe</h1>
                    <p className='text-gray-400 pb-4'>Subscribe to our newsletter for the latest updates</p>
                    <form className='flex rounded-full overflow-hidden mr-3'><input type="text" placeholder='Enter your email' className='p-2' />
                    <button className='p-3 rounded-r-2xl text-black bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600'>Subscribe</button></form>
                </div></div>
                <div className='pt-10'>
                    <p className='p-4 text-gray-400'>@2024 Your Company All Rights Reserved.</p>
                    </div>
            
            </div>
        </div>
        </>
    );
};

export default Footer;