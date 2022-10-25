import React from 'react';

const ExerciseDetails = () => {
    return (
        <div className='py-3'>
            <p className='text-lg font-bold px-4'>Exercise Details</p>
            <div className='flex place-content-between bg-slate-100 my-5 py-2 px-2 rounded-lg w-11/12 m-auto'>
                <p className='text-md font-semibold'>Exercise time</p>
                <p className='opacity-75'>00s</p>
            </div>
            <div className='flex place-content-between bg-slate-100 my-5 mb-10 py-2 px-2 rounded-lg w-11/12 m-auto'>
                <p className='text-md font-semibold'>Break time</p>
                <p className='opacity-75'>10s</p>
            </div>
            <button className='w-11/12 py-2 px-4 bg-indigo-500 text-white rounded-lg mx-2'>Activity Completed</button>

        </div>
    );
};

export default ExerciseDetails;