import React from 'react'
import { NavLink} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <div className='navdiv'>
    <div>
    <NavLink to='/'>Home</NavLink>
    </div>
    
    <div>
    <NavLink to='search'>Search</NavLink>
    </div>
    </div>
    </>
  )
}

export default Navbar