import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"

function CreateExercise({ onAddExercise }) {
  const [reps, setReps] = useState("")
  const [exercise, setExercise] = useState("")
  const [description, setDescription] = useState("")
  const [sets, setSets] = useState("")
  const [img, setImg] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
      e.preventDefault()
      const itemData = {
        "exercise": exercise,
        "description": description,
        "sets": sets,
        "reps": reps,
        "action": "Pending",
        "img": img,
      }
      fetch("http://localhost:8001/excercises", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData)
      })
      .then(r => r.json())
      .then(data => onAddExercise(data))
      .then(navigate("/exercise"))
  }

  return (
    <div>
      <Navbar />
      <div  className='create-exercise'>
        <h2>Create an exercise</h2>
        <h4>Fill in the form below to add an exercise to the list</h4>
          <form onSubmit={handleSubmit} >
            <div className='className='fitness-form>
            <div>
              <label className='create-label'>Exercise</label>
              <input className='create-input' type="text" required onChange={(e) => setExercise(e.target.value)}/>
            </div>
            <div>
              <label className='create-label'>Description</label>
              <input className='create-input' type="text" required onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
              <label className='create-label'>Sets</label>
              <input className='create-input' type="text" required onChange={(e) => setSets(e.target.value)}/>
            </div>
            <div>
              <label className='create-label'>Reps</label>
              <input className='create-input' type="text" required onChange={e => setReps(e.target.value)}/>
            </div>
            <div>
              <label className='create-label'>Paste a webURL image</label>
              <input className='create-input' 
                type="text" 
                onChange={e => setImg(e.target.value)} 
                placeholder="www.example.png"/>
            </div>
            </div>
            <button className='create-submit-bttn' type="submit">Submit</button>
          </form>
        
    </div>
    </div>
  )
}

export default CreateExercise