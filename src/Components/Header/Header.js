import React from 'react'
import logo from '../../assets/BR5-BENEFICIOS.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt='Logo da empresa'/>
        </div>
    </header>
  )
}

export default Header
