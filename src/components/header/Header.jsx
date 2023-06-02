import React from 'react'
import logo from '../../assets/images/logo.svg'
import './header.scss'

function Header() {
  const currentBalance = 921.48;
  return (
    <div className="header">
      <h1 className="header__balance">
        My balance <br />
        <span className="amount">
          ${currentBalance}
        </span>
      </h1>
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header