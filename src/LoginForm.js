import React, {useState} from 'react'

function LoginForm({login, error, createLogin}) {
  const [details, setDetails] = useState({username: "", password:""})

  const handleSubmit = e => {
    e.preventDefault()
    login(details)
  }

  return (
    
      <div>
      
          <form className="loginForm" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {(error !== "") ? (<div className='error'>{error}</div>) : ""}
            <div className="uname">
              <label>Username </label>
              <input 
                type='text' required 
                onChange={e => setDetails({...details, username: e.target.value})} 
                value={details.username} 
                id="username" 
                name="username"/>
            </div>
            <div className="pword">
              <label>Password </label>
              <input type='password' required  
                onChange={e => setDetails({...details, password: e.target.value})}
                value={details.password}
                id="password" 
                name="password"/>
              
            </div>
            <button type="submit">Login</button>
            <button type="submit" onClick={createLogin}>Create Login</button>
          </form>
      </div>
    )
  
}

export default LoginForm