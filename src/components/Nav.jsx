import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header>
      <h1> Assessment</h1>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/Owner'>Owner</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
