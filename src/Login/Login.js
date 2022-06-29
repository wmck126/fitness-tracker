import React, {useCallback, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";



export default function Login() {
  const [user, setUser] = useState({username: ""})
  const [isError, setError] = useState("")
  const [credentials, setCredentials] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
      fetch("http://localhost:8001/credentials")
      .then(r => r.json())
      .then(data => setCredentials(data))
    }, [])

  const navigate = useNavigate()
  const handleCreateLoginClick = useCallback(() => navigate('/createlogin', {replace:true}, [navigate]))

  const LogOut = () => {
    setUser({username: ""})
    setError("")
    navigate("/")

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
    <div className='app'>
      {(user.username != "") ? (
        <div className="welcome">
          <h1>Welcome, <span>{user.username}</span></h1>
          <p>Redirecting you to your workout...</p>
          <img src="https://i.imgur.com/7CDt2JY.gif" className="loading-img"/>
          <button onClick={LogOut} className='loginbttn'>Logout</button>
          <div className="timeout">
          {setTimeout(() => navigate("/exercise"), 3000)}
          </div>
        </div>
      )
      : (
        <LoginForm login={Login} error={isError} createLogin= {handleCreateLoginClick} />
      )}
    </div>
  )
} 