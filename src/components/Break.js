import React from 'react';

const Break = (props) => {
    return (
        <div className='py-3 w-11/12 m-auto'>
            <p className='text-lg font-bold my-2 mx-3'>Add A Break</p>
            <div className='flex bg-slate-100 rounded-lg'>
                <button onClick={()=>props.timeHandler(10)} className='mx-2 my-3 bg-white rounded-full p-1 text-sm hover:bg-indigo-700 hover:text-white'>10s</button>
                <button onClick={()=>props.timeHandler(20)} className='mx-2 my-3 bg-white rounded-full p-1 text-sm hover:bg-indigo-700 hover:text-white'>20s</button>
                <button onClick={()=>props.timeHandler(30)} className='mx-2 my-3 bg-white rounded-full p-1 text-sm hover:bg-indigo-700 hover:text-white'>30s</button>
                <button onClick={()=>props.timeHandler(40)} className='mx-2 my-3 bg-white rounded-full p-1 text-sm hover:bg-indigo-700 hover:text-white'>40s</button>
                <button onClick={()=>props.timeHandler(50)} className='mx-2 my-3 bg-white rounded-full p-1 text-sm hover:bg-indigo-700 hover:text-white'>50s</button>
            </div>
        </div>
    );
};

export default Break;