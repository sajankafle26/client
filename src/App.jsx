import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/create" element={<CreateUser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App