import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './NavbarH.css';
import logo from './image/logo.png'
import { IconContext } from 'react-icons/lib';

function NavbarH() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState (true);
  const [nav, setnav] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu =  () => setClick(false);
  const changeBackground = () => {
    if(window.scrollY >=50) {
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const [token, setToken] = useState();

  const tokenCheck = () => {
    setToken(localStorage.getItem("token"));

    if (token) {
      console.log("Token found:", token);
      return true;
    } else {
      console.log("Token not found");
      return false;
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);




  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className={nav ? "nav active" : "nav"}>
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <img src={ logo} style={{transform:'scale(50%)',marginLeft:'1.5rem'}} />
                    CareHub
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                  {click ? <FaTimes /> : <FaBars />} 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {/* <li className='nav-item'>
                    <Link to='/Reports' className='nav-links' onClick={closeMobileMenu}>
                      Reports
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Appointment' className='nav-links'  onClick={closeMobileMenu}>
                      Appointment
                    </Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to='/dashboard' className='nav-links'  onClick={closeMobileMenu}>
                  {token &&
                  
                      <span>dashboard</span>
                    }
                    </Link>
                  </li>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/login' className='btn-link' >
                        <Button buttonStyle='btn--outline'>LOG IN</Button>
                      </Link> 
                    ):(
                      <Link to='/login' className='btn-link'  onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'>
                          Log In
                        </Button>
                      </Link>
                    )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/signUp' className='btn-link' >
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                  </Link>
                ) : (
                  <Link to='/signUp' className='btn-link' onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--outline'
                      buttonSize='btn--mobile'>
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>

                </ul>
            </div>
        </div>
   </IconContext.Provider>
    </>
  )
}

export default NavbarH