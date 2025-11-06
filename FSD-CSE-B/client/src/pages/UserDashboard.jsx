import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default UserDashboard
