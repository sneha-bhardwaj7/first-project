import React from 'react'
import './NavBar.css'
import logo from '../../assets/first.png';

const NavBar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo'></img>
      <ul>
          <li>Use cases</li>
          <li>Features</li>
          <li>Resources</li>
          <li>Company</li>
      </ul>
      <button className='bttn'>contact us</button>
    </nav>
  )
}

export default NavBar
