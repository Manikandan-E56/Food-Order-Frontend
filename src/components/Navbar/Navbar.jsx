/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("menu");

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='logo' className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu=="home" ? "active" : ""} >Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu=="menu" ? "active" : ""} >menu</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu=="contact-us" ? "active" : ""} >contact us</a>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt='search-icon' />

        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='basket-icon' /></Link>
          <div className={getTotalCartAmount()===0? "": 'dot'}></div>
        </div>

        {!token?<button onClick={()=>setShowLogin(true)}>sign-in</button>
        :<div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" />

            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myprofile')} > <img src={assets.profile_icon} alt="" />Profile View</li>
              <hr />
              <li onClick={() => navigate('/myorders')} > <img src={assets.bag_icon} alt="" />Orders</li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" />Logout</li>
            </ul>
          </div>}

        
      </div>
    </div>
  )
}

export default Navbar
