import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from "reactstrap";
import logo from './../../Images/logo.JPG';
import menuIcon from '../../Images/icons/menu-line.png';
import './header.css';

const navigation=[
  {
    path:"/home",
    display:'Home'
  },
  {
    path:"/places",
    display:'All Trips'
  },
  {
    path:"",
    display:'About Us'
  },
  {
    path:"",
    display:'Contact Us'
  },
]

function Header() {

  return (
   <header className='header'>
        <div className='navBarLeft'>
           <div className='logo'>
            <img src={logo} alt="logo"/>
           </div>
           <div className='navBarCenter'>
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
                 <Button className='btn primaryBtn'><Link to='/login'>Login</Link></Button>
                 <Button className='btn secondaryBtn'><Link to='/register'>Register</Link></Button>
             </div>
             <span className='menuBar'>
                 <img src={menuIcon} alt='menubar' className="menuBarIcon"/>
             </span>
            </div>
        </div>
    <script src="https://kit.fontawesome.com/cd486dfca5.js" crossorigin="anonymous"></script>
   </header>
  )
}

export default Header
