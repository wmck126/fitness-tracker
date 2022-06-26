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
      <h3 className='nav-title'>Fitness Tracker</h3>
      <div className='lis-nav'>
        <ul>
          <li onClick={onClickWorkout}>Workout</li>
          <li onClick={onClickCreate}>Create Exercise</li>
          <li onClick={onClickComplete}>Completed Excercises</li>
          <li 
          onClick={() => navigate("/")}
          className="logoutbtnfitness"
          >Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar