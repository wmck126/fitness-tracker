import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


export default function CreateLogin() {

  const [loginInfo, setLoginInfo] = useState({username: "", password:""})

  const navigate = useNavigate()
  
  const refresh = () => window.location.reload()

    function handleSubmit(e) {
      e.preventDefault() 
      
        fetch('http://localhost:8001/credentials', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo)
          })
          .then(r => r.json())
          .then((newLogin) => setLoginInfo(newLogin))
          .then(navigate("/"))
      }
    

  
  return (
    <div className="createLoginForm">
      <h1>Create Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="createUname">
          <label>Username: </label>
          <input type="text" required onChange={e => setLoginInfo({...loginInfo, username: e.target.value})}/>
        </div>
        <div className="createPword">
          <label>Password: </label>
          <input type="text" required onChange={e => setLoginInfo({...loginInfo, password: e.target.value})}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
  }