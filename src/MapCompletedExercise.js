import React from 'react'
import CompletedExercise from './CompletedExercise'
import Navbar from './Navbar'

function MapCompletedExercise({completed, exercise}) {
const isCompleted = () => {
  if (completed.length === 0){
    return true
  } else {
    return false
  }
}

console.log(isCompleted())
  console.log(completed)
  return (
    <div>
      <Navbar/>
      <h1 className='completed-title'>Completed Exercises</h1>
      <div className='completed-exercise'>
      { isCompleted()
      ? 'Start completing some exercises!' 
      : completed.map((data) => (
          <CompletedExercise 
            ex={exercise}
            id={data.id} 
            exercise={data.exercise} 
            description={data.description} 
            sets={data.sets} 
            reps={data.reps}
            action={data.action}
            img={data.img}
            />))}
          </div>
    </div>
  )
}

export default MapCompletedExercise