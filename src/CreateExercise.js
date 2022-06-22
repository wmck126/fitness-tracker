import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom"

function CreateExercise({ onAddExercise }) {
  const [reps, setReps] = useState("")
  const [exercise, setExercise] = useState("")
  const [description, setDescription] = useState("")
  const [sets, setSets] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
      e.preventDefault()
      const itemData = {
        "exercise": exercise,
        "description": description,
        "sets": sets,
        "reps": reps,
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
      <h2>Create an exercise</h2>
      <h4>Fill in the form below to add an exercise to the list</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Exercise</label>
        <input type="text" required onChange={(e) => setExercise(e.target.value)}/>
        </div>
        <div>
        <label>Description</label>
        <input type="text" required onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label>Sets</label>
        <input type="text" required onChange={(e) => setSets(e.target.value)}/>
        </div>
        <div>
          <label>Reps</label>
        <input type="text" required onChange={e => setReps(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateExercise