// import React from 'react'
import Log  from '../Log/Log'
import './NavBar.css'
import { Outlet,Link,} from 'react-router-dom'

const navBar = () => {
  return (
    <div className='nav'>
      
      <div className="nav-logo">
        My-ShowTime
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>
          Explore
        </li>
        
        <li>About</li>
        <li>
          <Log/>
        </li>
        <li className="nav-contact">Contact</li>
      </ul>
      <Outlet/>
    
    </div>
  )
}
export default navBar 