import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  let formsubmit=(e)=>{
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users", { name, email })
        .then(() => navigate("/"))
        .catch(error => console.error("Error creating user:", error));
  
  }
  return (
    <div>
      <h2>CreateUser</h2>
      <form onSubmit={formsubmit}>
      Name  <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <hr />
      Email  <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <hr />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser