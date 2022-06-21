import React from 'react'

function FitnessForm({dumbell, squat, run}) {
  console.log(dumbell)
  return (
    <div>
      <h1>FitnessForm</h1>
      <form>
        <label>{dumbell}</label>
        <input type="text"></input>
      </form>
      <form>
        <label>{squat}</label>
        <input type="text"></input>
      </form>
      <form>
        <label>{run}</label>
        <input type="text"></input>
      </form>
    </div>
  )
}

export default FitnessForm