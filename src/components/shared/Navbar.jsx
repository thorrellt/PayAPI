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

export default function Navbar(props) {
    const windowWidth = props.windowWidth
    const [navActive, setNavActive] = useState(false)


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
            document.getElementById("Navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className="Navbar flex-container" id='Navbar'>
            <a href="#Home">
                <img src={logo} alt="PayAPI logo"
                    className='logo' />
            </a>


            {/* mobile menu toggle button animation logic */}
            {windowWidth <= 900 &&
                <button onClick={toggleNav} className='menu-toggle-btn'>
                    <img src={menu} className='hamburger' />
                </button>
            }

            <div id='navMenu' className={`${navActive ? 'show' : 'hidden'} ${navActive ? 'slide-left' : 'slide-right'} flex-container menu-wrapper`}>
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