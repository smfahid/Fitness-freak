import React, { useEffect,useState } from 'react';
import ItemCard from './ItemCard';

const Exercise = (props) => {
     const [item,setItem] = useState([]);
    useEffect(()=>{
        fetch('db.json')
        .then(res=>res.json())
        .then(data=>{
            
            // console.log(data.map(x=>x.img)); 
            setItem(data);   
        });
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 gap-y-4">
            
            {item.map(
                items=><ItemCard key ={items.img} id={items.id} addToList={props.addToList} title={items.title} img ={items.img} details ={items.details} forAge={items.age} time={items.Time} ></ItemCard> 
            )}  
            
        </div>
    );
};

export default Exercise;