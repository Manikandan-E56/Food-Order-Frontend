/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Relish the ease of having gourmet meals delivered directly to you, transforming every meal into a special occasion without the hassle of cooking.Your favorite dishes, prepared with care and delivered with precision, ensuring that every meal is a moment of joy and satisfaction.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9042158082</li>
                    <li>emanigandan58@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 @ FoodDish.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer