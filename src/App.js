// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Break from './components/Break';
import CartSection from './components/CartSection';
import Exercise from './components/Exercise';
import ExerciseDetails from './components/ExerciseDetails';

function App() {

  const [exTime,setexTime] = useState(0);

  const addToList=(time)=>{
    const itemTime = parseInt(time);
    setexTime(exTime+itemTime);
    console.log(exTime);
  }

  const addBreakTime=(btime)=>{
    console.log(btime)
  }
  return (
    <div className="container mx-auto py-4 parent-1 bg-ligh bg-slate-50">
      <div>
        <h1 className='text-2xl font-bold py-4 ml-6 text-indigo-500'>Fitness-freak <i class="fa-solid fa-dumbbell"></i></h1>
        <p className='text-lg font-semibold py-4 ml-6'>Select today's exercise</p>
        
        <Exercise addToList={addToList}></Exercise>
      </div>
      <div>
        <div className='bg-white mr-3 rounded h-full'>
          <CartSection></CartSection>
          <Break timeHandler={addBreakTime}></Break>
          <ExerciseDetails time ={exTime}></ExerciseDetails>
        </div>
      </div>
    </div>
  );
}

export default App;
