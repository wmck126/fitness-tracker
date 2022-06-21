import React, { useEffect, useState } from 'react'
import FitnessForm from './FitnessForm'

function Fitness() {
  const [exercises, setExercise] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/excercises")
    .then(r => r.json())
    .then(data => setExercise(data))
  },[]  )
  console.log(exercises)
  return (
    <div>
      {exercises.map((data) => <FitnessForm dumbell={data.arm} squat={data.leg} run={data.cardio}/>)}
    </div>
  )
}

export default Fitness