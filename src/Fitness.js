import React from 'react'
import FitnessForm from './FitnessForm'
import Navbar from './Navbar';

function Fitness({ exercises, onComplete }) {
  

  
  
  return (
    <div>
      <Navbar />
      <div className='main-layout'>
      {exercises.map((data) => (
        <FitnessForm 
          id={data.id} 
          exercise={data.exercise} 
          description={data.description} 
          sets={data.sets} 
          reps={data.reps}
          action={data.action}
          img={data.img}
          onComplete={onComplete}
          />))}
          </div>
    </div>
  )
}

export default Fitness