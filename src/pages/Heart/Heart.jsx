import React from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
const Heart = () => {
    const location = useLocation()
    const userdata = location.state.userData
  return (

    <>
    <h1>Enfermdedades del corazon</h1>
    <p>{userdata.displayName}</p>
    <Outlet />
    </>
    
  )
}

export default Heart