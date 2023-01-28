import React, { useRef } from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const data = useRef();
    const navigate = useNavigate();
    const done = (event)=>{
        if (event.key === 'Enter') {
           localStorage.setItem('enter',data.current.value);
          navigate('/search');
          }
        
    }
  return (
    <>
    <div className='navdiv'>
    <div>
    <NavLink to='/'>Home</NavLink>
    </div>
    
    <div>
    <input type="text" ref={data}  onKeyDown={done}/>
    </div>
    </div>
    </>
  )
}

export default Navbar