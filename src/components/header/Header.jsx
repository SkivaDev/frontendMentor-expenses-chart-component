import React from 'react'
import logo from '../../assets/images/logo.svg'
import './header.scss'

function Header() {
  const currentBalance = 921.48;
  return (
    <div className="header">
      <div className="header__text">
        <h1 className="header__text--title">My balance</h1>
        <div className="header__text--balance">
          {`$${currentBalance}`}
        </div>
      </div>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header