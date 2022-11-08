import React, { useState } from 'react'
import Navbar from '../components/Navbar'
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
    <div className='app'>
      <Navbar />
      <div  className='create-exercise'>
        <h2>Create an exercise</h2>
        <h4>Fill in the form below to add an exercise to the list</h4>
          <form onSubmit={handleSubmit} >
            <div className='fitness-form'>
            <div>
              <input className='create-input' type="text" placeholder='Exercise' required onChange={(e) => setExercise(e.target.value)}/>
            </div>
            <div>
              <input className='create-input' type="text" placeholder='Description' required onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div>
              <input className='create-input' type="text" placeholder='Sets' required onChange={(e) => setSets(e.target.value)}/>
            </div>
            <div>
              <input className='create-input' type="text" placeholder='Reps' required onChange={e => setReps(e.target.value)}/>
            </div>
            <div>
              <input className='create-input' 
                
                type="text" 
                onChange={e => setImg(e.target.value)} 
                placeholder="Paste an image (ex. www.img.png)"/>
            </div>
            </div>
            <button className='create-submit-bttn' type="submit">Submit</button>
          </form>
        
    </div>
    </div>
  )
}

export default CreateExercise