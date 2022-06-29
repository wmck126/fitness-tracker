import React from 'react'
import Navbar from './Navbar'

function CompletedExercise({exercise, id, description, sets, reps, ex, img  }) {

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
    <div className='completed-exercise'>
      
      <Navbar />
      
      <div className='main'>
        <h3 key={id} className='exercise-title'>{exercise}</h3>
        <img src={img} alt="Exercise image" className='exercise-image'/>
        <p className='exercise-description'>{description}</p>
        <span className='exercise-sets'>{sets} sets of {reps} reps</span>
        <div className='buttons-main'>
          <button className='buttons' onClick={handlePending}>Send back to workout</button>
          {/* <button className='buttons'>Edit</button> */}
        </div>
    </div>
    </div>
  )
}

export default CompletedExercise