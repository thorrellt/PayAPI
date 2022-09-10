import { useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'

export default function Navbar() {
    return (
        <div className="Navbar flex-container">
            <img src={logo} alt="PayAPI logo"
            className='logo' />
            <img src={menu} alt="open menu" 
            className='menu-toggle'/>
        </div>      
        )
}