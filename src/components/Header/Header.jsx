import React, { useRef, useEffect, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Button } from "reactstrap";
import logo from './../../Images/logo.JPG';
import menuIcon from '../../Images/icons/menu-line.png';
import './header.css';

import { Auth } from '../../userAuth/Auth';

const navigation = [
  {
    path: "/home",
    display: 'Home'
  },
  {
    path: "/places",
    display: 'All Trips'
  },
  {
    path: "/about",
    display: 'About Us'
  },
  {
    path: "/contactUs",
    display: 'Contact Us'
  },
]

function Header() {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Auth);

  const logoutFunc = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header'>
      <div className='navBarLeft'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='navBarCenter' ref={menuRef} onClick={toggleMenu}>
          <ul className='menu'>
            {navigation.map((item, index) => (
              <li className='navBar_item' key={index}>
                <NavLink to={item.path}
                  className={navClass =>
                    navClass.isActive ? "active_link" : ""}
                >{item.display}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='navBarRight'>
          <div className='btns'>
            {
              user ?
                <>
                  <p className='userNameText'>{user.userName}</p>
                  <Button className='btn primaryBtn' onClick={logoutFunc}>Logout</Button>
                  <Link to='/userBookings'><Button className='btn primaryBtn'>Bookings</Button></Link>
                </> : <>
                  <Link to='/login'><Button className='btn primaryBtn'>Login</Button></Link>
                  <Link to='/register'><Button className='btn secondaryBtn'>Register</Button></Link>
                </>
            }
          </div>
          <span className='menuBar' onClick={toggleMenu}>
            <img src={menuIcon} alt='menubar' className="menuBarIcon" />
          </span>
        </div>
      </div>
      <script src="https://kit.fontawesome.com/cd486dfca5.js" crossorigin="anonymous"></script>
    </header>
  )
}

export default Header;