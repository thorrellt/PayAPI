import { useState, useEffect } from 'react'
import '../../styles/shared/Navbar.css'
import {
    TransitionGroup,
    SwitchTransition,
    CSSTransition
} from 'react-transition-group';
import logo from '../../assets/shared/desktop/logo.svg'
import menu from '../../assets/shared/mobile/menu.svg'
import close from '../../assets/shared/mobile/close.svg'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
    const windowWidth = props.windowWidth
    const [navActive, setNavActive] = useState(false)

    const breakWidth = 680;


    //Eliminates slide animation on 1st load
    useEffect(() => {
        const menu = document.getElementById('navMenu');
        menu.classList.remove('slide-right')
    }, [])

    const toggleNav = () => {
        setNavActive(prevNavState => !prevNavState)
    }

    //NAV BAR SCROLL CONTROLS
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("Navbar").style.top = "0";
        } else {
            document.getElementById("Navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className="Navbar flex-container" id='Navbar'>
            {windowWidth < breakWidth &&
                <NavLink to="/PayAPI"  className='logo-link'>
                    <img src={logo} alt="PayAPI logo"
                        className='logo' />
                </NavLink>
            }

            <button onClick={toggleNav} className='menu-toggle-btn'>
                <img src={menu} className='hamburger' />
            </button>


            <div id='navMenu' className={`${navActive ? 'show' : 'hidden'} ${navActive ? 'slide-left' : 'slide-right'} flex-container menu-wrapper`}>
                {windowWidth < breakWidth &&
                    <div className="flex-container exit-wrapper">
                        <button onClick={toggleNav} className='menu-exit-btn'>
                            <img src={close} className='close' />
                        </button>
                    </div>
                }
                {windowWidth >= breakWidth &&
                    <NavLink to="/PayAPI" className='logo-link'>
                        <img src={logo} alt="PayAPI logo"
                            className='logo' />
                    </NavLink>
                }
                <ul>
                    <li>
                        <NavLink to="/PayAPI/pricing">Pricing</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PayAPI/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PayAPI/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/PayAPI/project">This Project</NavLink>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                        <a to="/PayAPI/pricing">Pricing</a>
                    </li>
                    <li>
                        <a to="/PayAPI/about">About</a>
                    </li>
                    <li>
                        <a to="/PayAPI/contact">Contact</a>
                    </li>
                    <li>
                        <a to="/PayAPI/project">This Project</a>
                    </li>
                </ul> */}
                <button className="prim-btn">Schedule a Demo</button>
            </div>



            {/* <img src={menu} alt="open menu"
                className='menu-toggle-btn' /> */}
        </div>
    )
}