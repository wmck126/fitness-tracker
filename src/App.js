import './App.css';
import React, {useState, useEffect} from 'react';
import Login from './Login/Login';
import Welcome from './Login/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateLogin from './Login/CreateLogin';
import Fitness from './Fitness';
import CreateExercise from './CreateExercise';
import CompletedExercise from './CompletedExercise';

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

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/createlogin" element={<CreateLogin />}/>
              <Route path="/exercise" element={<Fitness exercises={exercises}/>} />
              <Route path="/create" element={<CreateExercise onAddExercise={handleAddExercise}/>} />
              <Route path="/completed" element={<CompletedExercise />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


/*
Login
Create Login


*/