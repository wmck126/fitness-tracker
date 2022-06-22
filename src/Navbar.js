import React from 'react'
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate()

  function onClickCreate() {
    navigate("/create")
  }

  function onClickComplete() {
    navigate("/completed")
  }

  function onClickWorkout() {
    navigate("/exercise")
  }

  return (
    <div className='navbar'>
      <h3>Fitness Tracker</h3>
      <button onClick={onClickWorkout}>Workout</button>
      <button onClick={onClickCreate}>Create Workout</button>
      <button onClick={onClickComplete}>Completed excercises</button>
    </div>
  )
}

export default Navbar