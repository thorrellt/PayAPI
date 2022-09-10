import { useState } from 'react'
import '../styles/Navbar.css'
import {
    TransitionGroup,
    SwitchTransition,
    CSSTransition
} from 'react-transition-group';
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'

export default function Navbar(props) {
    const windowWidth = props.windowWidth
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(prevNavState => !prevNavState)
    }

    return (
        <div className="Navbar flex-container">
            <img src={logo} alt="PayAPI logo"
                className='logo' />


            {/* mobile menu toggle button animation logic */}
            {windowWidth <= 900 &&
                <button onClick={toggleNav} className='menu-toggle-btn'>
                    <img src={menu} className='hamburger' />
                </button>
            }

            <div className={`${navActive ? 'show' : 'hidden'} flex-container menu-wrapper`}>
                <div className="flex-container exit-wrapper">
                    <button onClick={toggleNav} className='menu-exit-btn'>
                        <img src={close} className='close' />
                    </button>
                </div>
                <ul>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <button className="prim-btn">Schedule a Demo</button>
                    </li>
                </ul>
            </div>



            {/* <img src={menu} alt="open menu"
                className='menu-toggle-btn' /> */}
        </div>
    )
}