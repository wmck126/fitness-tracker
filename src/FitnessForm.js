import React from 'react'

function FitnessForm({sets, description, exercise, reps, id}) {
  
  return (
    <div>
        <h3 key={id}>{exercise}</h3>
        <p>{description}</p>
        <span>{sets} sets of {reps} reps</span>
        <button>Completed!</button>
        <button>Edit</button>
    </div>
  )
}

export default FitnessForm