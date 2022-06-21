import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


export default function CreateLogin() {

  const [loginInfo, setLoginInfo] = useState({username: "", password:""})

  const navigate = useNavigate()
  

    function handleSubmit(e) {
      e.preventDefault() 
      
        fetch('http://localhost:8000/credentials', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo)
          })
          .then(r => r.json())
          .then((newLogin) => setLoginInfo(newLogin))
          .then(navigate("/login").location.reload())
      }
    

  
  return (
    <div className="createLoginForm">
      <h2>Create Login</h2>
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