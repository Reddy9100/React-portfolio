import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav className='navbar-nav'>
        <h1 className='nav-head'>R<span className='nav-head2'>K</span></h1>
            <ul className='navbar-ul'>
                <li className='nav-li'>Home</li>
                <li className='nav-li'>About</li>
                <li className='nav-li'>Skills</li>
                <li className='nav-li'>Projects</li>
                <button className='nav-btn'>Contact Us</button>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar