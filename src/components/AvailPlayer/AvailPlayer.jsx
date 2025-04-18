import React from 'react';
import { ImUser } from "react-icons/im";
import { IoFlagSharp } from "react-icons/io5";

const AvailPlayer = ({player}) => {
    const{name, country, image, role, battingStyle, biddingPrice} = player;

    return (
        <>
        <div className='p-2 border rounded-xl'>
            <img className='w-[230px] h-[200px] rounded-xl' src={image}></img>
            <span className='flex items-center gap-2'>
                <ImUser></ImUser>
                <p>{name}</p> 
            </span>
            <section className='flex justify-between'>
                <span className='flex items-center gap-2'>
                <IoFlagSharp className='text-gray-400'></IoFlagSharp>
                <p className='text-gray-400'>{country}</p>
            </span>
                <span className='p-[10px] rounded-xl bg-gray-200 text-gray-500'>{role}</span>
            </section>
            <span className='font-medium flex justify-between p-[5px]'><p>Rating</p><p></p></span>
            <span className='flex justify-between p-[5px] items-center'><p>{battingStyle}</p> <p className='text-gray-500'>{battingStyle}</p></span>
            <span className='flex justify-between p-[5px] items-center'>
                <p>Price: ${biddingPrice}</p>
                <button className='bg-white border text-gray-500 rounded-xl p-[10px]'>Choose Player</button>
            </span>
        </div>
        </>
    );
};

export default AvailPlayer;