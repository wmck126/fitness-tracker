import React, {useState, useEffect} from 'react';
import Login from '../components/Login/Login';
import Welcome from '../components/Login/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateLogin from '../components/Login/CreateLogin';
import Fitness from './Fitness';
import CreateExercise from './CreateExercise';
import MapCompletedExercise from '../components/MapCompletedExercise';


/*
Need to work on:
- Making elements move between completed/pending without page refresh
- Removing redirect timer
- Additional styling/css so not so b&w
- Add data tied to users credentials
- On logout, set all exercises to pending
*/

function App() {

  const [exercises, setExercise] = useState([])

  useEffect(() => {
    fetch("http://localhost:8001/excercises")
    .then(r => r.json())
    .then(data => setExercise(data))
  },[]  )

  function handleAddExercise(newExercise) {
    setExercise([...exercises, newExercise])
  } 

  function handleMoveExercise(completedExercise) {
    const updatedList = exercises.filter((done) => done.action !== completedExercise.action)
    setExercise(updatedList)
  }

  const exercisesToDisplay = exercises.filter((exercise) => exercise.action === "Pending")
  
  const completedExercise = exercises.filter((exercise) => exercise.action === "Completed")

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/createlogin" element={<CreateLogin />}/>
              <Route path="/exercise" element={<Fitness exercises={exercisesToDisplay} onComplete={handleMoveExercise}/>} />
              <Route path="/create" element={<CreateExercise onAddExercise={handleAddExercise}/>} />
              <Route path="/completed" element={<MapCompletedExercise completed={completedExercise} exercise={setExercise}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
