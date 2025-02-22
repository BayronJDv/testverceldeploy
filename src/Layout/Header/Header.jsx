import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/quiz'>quiz</NavLink>

        </nav>
    </header>
  )
}

export default Header