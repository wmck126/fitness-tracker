import React from 'react'
import Navbar from './Navbar'

function CompletedExercise({exercise, id, description, sets, reps, ex  }) {

  function handlePending(e) {
    e.preventDefault()
      fetch (fetch(`http://localhost:8001/excercises/${id}`, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "action": "Pending"
        })
      }))
      .then(r => r.json())
      .then(data => ex(data))
  }
  
  return (
    <div>
      
      <Navbar />
      
      <div className='completed-exercises'>
            <h3 key={id}>{exercise}</h3>
            <p>{description}</p>
            <span>{sets} sets of {reps} reps</span>
            <div className='buttons-main'>
              <button className='buttons' onClick={handlePending}>Pending</button>
              <button className='buttons'>Edit</button>
            </div>
      </div>
    </div>
  )
}

export default CompletedExercise