import React from 'react';
import './navbar.css';
import { ArrowDropDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const name = useSelector(state=>state.user.userInfo.name);

  return (
    <div className='nav'>
      <div className="navWrapper">
        <div className="navLeft">
            <span className="logo">Redux Tut</span>
            <span className="navLink">Home</span>
            <span className="navLink">About</span>
            <span className="navLink">Contact</span>
        </div>
        <div className="navCenter">
            <div className="search">
                <input type="text" placeholder='search for something....' className="searchInput" />
            </div>
        </div>
        <div className="navRight">
           <img src="girl.jpg" alt="" className="avatar" /> 
           <span className="navName">{name}</span>
           <ArrowDropDown/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
