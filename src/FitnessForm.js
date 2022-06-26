import React from 'react'

function FitnessForm({sets, description, exercise, reps, id, completed}) {

  function handleCompleted(e) {
    e.preventDefault()
      fetch (fetch(`http://localhost:8001/excercises/${id}`, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "action": "Completed"
        })
      }))
      .then(r => r.json())
  }
  
  return (
    <div className='main'>
        <h3 key={id}>{exercise}</h3>
        <p>{description}</p>
        <span>{sets} sets of {reps} reps</span>
        <div className='buttons-main'>
          <button className='buttons' onClick={handleCompleted}>Completed!</button>
          {/* <button className='buttons'>Edit</button> */}
        </div>
    </div>
  )
}

export default FitnessForm