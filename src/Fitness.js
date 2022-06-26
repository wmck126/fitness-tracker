import React from 'react'
import FitnessForm from './FitnessForm'
import Navbar from './Navbar';

function Fitness({ exercises, onCompleted, current }) {
  

  
  
  return (
    <div>
      <Navbar />
      {exercises.map((data) => (
        <FitnessForm 
          id={data.id} 
          exercise={data.exercise} 
          description={data.description} 
          sets={data.sets} 
          reps={data.reps}
          action={data.action}
          />))}
    </div>
  )
}

export default Fitness