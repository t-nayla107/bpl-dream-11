import React, { useEffect, useState } from 'react';
import AvailPlayer from '../AvailPlayer/AvailPlayer';

const AvailPlayers = () => {
    const [players, setPlayers] = useState([]);
    const{playerId} = players;

    useEffect(() => {
        fetch('/public/Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <>
        <div className='my-3 py-2 flex justify-between'>
            <h1 className='font-bold text-2xl'>Available Players</h1>
            <div><button className='p-3 bg-lime-400 border rounded-r rounded-xl'>Available</button>
            <button className='p-3 bg-white border rounded-l rounded-xl text-gray-500'>Selected<span>(0)</span></button></div>
        </div>

        <div className='border rounded-md mb-36'>
            <div className='m-2 p-2 grid grid-cols-3 gap-4'>
                {
                    players.map(data => 
                    <AvailPlayer 
                    key={playerId}    
                    player={data}></AvailPlayer>)
                }
            </div>
        </div>    
        </>
    );
};

export default AvailPlayers;