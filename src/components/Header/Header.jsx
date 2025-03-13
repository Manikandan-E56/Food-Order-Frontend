// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favorite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes crafted with a finest ingredients and cullinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal of a time</p>
        <button to="#explore-menu">View Menu</button>
      </div>
    </div>
  )
}

export default Header
