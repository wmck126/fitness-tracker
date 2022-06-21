import './App.css';
import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateLogin from './CreateLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/createlogin" element={<CreateLogin />}/>
        
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;


/*
Login
Create Login


*/