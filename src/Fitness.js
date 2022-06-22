import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import FitnessForm from './FitnessForm'
import Navbar from './Navbar';

function Fitness({ exercises }) {
  

  

  const navigate = useNavigate()
  console.log(exercises)
  return (
    <div>
      <Navbar />
      {exercises.map((data) => (
        <FitnessForm 
          id={data.id} 
          exercise={data.exercise} 
          description={data.description} 
          sets={data.sets} 
          reps={data.reps}
          />))}
      <button 
        onClick={() => navigate("/")}
        className="logoutbtnfitness"
        >Logout</button>
    </div>
  )
}

export default Fitness