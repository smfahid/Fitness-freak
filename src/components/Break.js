import React from 'react';

const Break = () => {
    return (
        <div className='py-3 w-11/12 m-auto'>
            <p className='text-lg font-bold my-2 mx-3'>Add A Break</p>
            <div className='flex bg-slate-100 rounded-lg'>
                <button className='mx-2 my-3 bg-white rounded-full p-1 text-sm'>10s</button>
                <button className='mx-2 my-3 bg-white rounded-full p-1 text-sm'>20s</button>
                <button className='mx-2 my-3 bg-white rounded-full p-1 text-sm'>30s</button>
                <button className='mx-2 my-3 bg-white rounded-full p-1 text-sm'>40s</button>
                <button className='mx-2 my-3 bg-white rounded-full p-1 text-sm'>50s</button>
            </div>
        </div>
    );
};

export default Break;