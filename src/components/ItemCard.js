import React from 'react';
import './ItemCard.css'

const ItemCard = (props) => {
  const addToList=(id)=>{
    console.log(id)
  }
    return (
        <div>
            <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg item-img" src={props.img} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {props.details}
      </p>
      <p className='text-sm mb-2 font-semibold'>For age: {props.forAge}</p>
      <p className='text-sm mb-3 font-semibold'>Time Required: {props.time}</p>
      <button onClick={()=>addToList(props.id)} type="button" className="w-full px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add to list</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemCard;