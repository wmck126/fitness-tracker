import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate= useNavigate()
  const handleLoginClick = useCallback(() => navigate('/login', {replace:true}, [navigate]))


  return(
    <div className="welcome">
    <h2>Welcome to the fitness tracker app</h2>
    <button className="welcomebtn" onClick={handleLoginClick}>Login</button>
    </div>
  )
}

