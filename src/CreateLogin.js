import React from "react";

export default function CreateLogin() {
  
  return (
    <div className="createLoginForm">
      <h2>Create Login</h2>
      <form>
        <div className="createUname">
          <label>Username: </label>
          <input type="text" required />
        </div>
        <div className="createPword">
          <label>Password: </label>
          <input type="text" required />
        </div>
      </form>
    </div>
  )
}