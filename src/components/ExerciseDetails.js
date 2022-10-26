import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = (props) => {
    const activity =()=>{
        // console.log('clicked')
        toast.success("Congratulation! Activity Completed Successfully.",{
            position:"top-center",

        });
    }
    const btime = localStorage.getItem('clicked');
    // console.log(JSON.stringify(localStorage.getItem('clicked'))==='null');
    localStorage.getItem('clicked')
    return (
        <div className='py-3'>
            <p className='text-lg font-bold px-4'>Exercise Details</p>
            <div className='flex place-content-between bg-slate-100 my-5 py-2 px-2 rounded-lg w-11/12 m-auto'>
                <p className='text-md font-semibold'>Exercise time</p>
                <p className='opacity-75'>{props.time}</p>
            </div>
            <div className='flex place-content-between bg-slate-100 my-5 mb-10 py-2 px-2 rounded-lg w-11/12 m-auto'>
                <p className='text-md font-semibold'>Break time</p>
                <p className='opacity-75'>{JSON.stringify(localStorage.getItem('clicked'))==='null'?10:btime}</p>
            </div>
            <button onClick={()=>activity()} className='w-11/12 py-2 px-4 bg-indigo-500 text-white rounded-lg mx-2'>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default ExerciseDetails;