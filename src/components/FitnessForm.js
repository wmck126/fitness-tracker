import React from 'react'

function FitnessForm({sets, description, exercise, reps, id, onComplete, img}) {

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
      .then(data => onComplete(data))
  }
  
  return (
    <div className='main'>
        <h3 key={id} className='exercise-title'>{exercise}</h3>
        <img src={img} alt="Exercise image" className='exercise-image'/>
        <p className='exercise-description'>{description}</p>
        <span className='exercise-sets'>{sets} sets of {reps} reps</span>
        <div className='buttons-main'>
          <button className='buttons' onClick={handleCompleted}>Completed!</button>
          {/* <button className='buttons'>Edit</button> */}
        </div>
    </div>
  )
}

export default FitnessForm