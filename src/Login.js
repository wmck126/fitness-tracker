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

  const Login = details => {
    console.log(details)
    if (details.username == credentials[0].username && details.password == credentials[0].password) {
      console.log("Logged in!")
      
      setUser({
        username: details.username
      })
    } else {
      setError("Details do not match")
    }
  }

  const LogOut = () => {
    console.log("Logout")
    setUser({username: ""})
  }


  return (
    <div>
      {(user.username != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{credentials[0].name}</span></h2>
          <button onClick={LogOut}>Logout</button>
        </div>
      )
      : (
        <LoginForm login={Login} error={isError} createLogin= {handleCreateLoginClick} />
      )}
    </div>
  )
}