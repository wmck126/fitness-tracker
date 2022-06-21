import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";



export default function Login() {
  const [user, setUser] = useState({username: ""})
  const [isError, setError] = useState("")
  const [credentials, setCredentials] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:8000/credentials")
      .then(r => r.json())
      .then(data => setCredentials(data))
    }, [])

  const navigate = useNavigate()
  const handleCreateLoginClick = useCallback(() => navigate('/createlogin', {replace:true}, [navigate]))

  const LogOut = () => {
    setUser({username: ""})
    setError("")
  }

  const Login = details => {
    for(let i=0; i<credentials.length; i++) {
      if (details.username == credentials[i].username && details.password == credentials[i].password) {
        console.log("Logged in!")
        setError("")
        setUser({
          username: details.username,
        })
        console.log(details.username)
        
      } else {
        setError("Details do not match")
      }
    } 
  }
  


  return (
    <div>
      {(user.username != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={LogOut}>Logout</button>
        </div>
      )
      : (
        <LoginForm login={Login} error={isError} createLogin= {handleCreateLoginClick} />
      )}
    </div>
  )
} 