import React from 'react'
import './Navbar.css'

const Navbar = ({account })=> {
  return (
    <div>
        <nav className='navbar'>
        <p className='navbar-brand'>Election DApp</p>
        <ul className='navbar-nav'>
          <li className='nav-item'>Managed By : {account}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar