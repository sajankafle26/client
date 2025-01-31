import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    setUsers(res.data);
  });
  }, []);

  let deleteUser=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => setUsers(users.filter(user => user.id !== id)))
  }
  return (
    <>
    <Link to={`/create`}>Add User</Link>
    <h3>User List</h3>
    {users.map((a)=>(
      <div key={a.id}>
        {a.name} {a.email} 
        <button onClick={()=>deleteUser(a.id)}>del</button>
      </div>
    ))}
    </>
  )
}

export default UserList