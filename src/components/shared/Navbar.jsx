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
import {
    NavLink,
    useLocation
} from "react-router-dom";
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'

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

    //minimize menu on page change
    let location = useLocation();
    useEffect(() => {
        setNavActive(false)
    }, [location]);

    //hide nav on scroll down
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
        <nav className="Navbar flex-container" id='Navbar'>
            {windowWidth < breakWidth &&
                <NavLink to="/PayAPI" className='logo-link'>
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
                        <NavLink to="/PayAPI/project">Meet the Dev</NavLink>
                    </li>
                </ul>
                <button className="prim-btn">Schedule a Demo</button>
            </div>
        </nav>
    )
}