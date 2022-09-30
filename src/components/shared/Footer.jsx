import { useState } from 'react'
import '../../styles/shared/Footer.css'
import logo from '../../assets/shared/desktop/logo.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'
import facebook from '../../assets/shared/desktop/facebook.svg'
import linkedin from '../../assets/shared/desktop/linkedin.svg'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'
import CTA from './CTA'
import Circle from './Circle'
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <section className="Footer">
            <div className="cta">
                <h2>Ready to start?</h2>
                <CTA />
            </div>

            <footer className='flex-container'>
                <NavLink to="/PayAPI">
                    <img src={logo} alt="PayAPI logo"
                        className='logo' />
                </NavLink>
                <ul className='flex-container'>
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
                <div className="contacts flex-container">
                    <a href="#" className="contact">
                        <img src={facebook} alt="facebook"
                            className='facebook' />
                    </a>
                    <a href="#" className="contact">
                        <img src={twitter} alt="twitter"
                            className='twitter' />
                    </a>
                    <a href="#" className="contact">
                        <img src={linkedin} alt="linkedin"
                            className='linkedin' />
                    </a>
                </div>
                <Circle />
            </footer>

        </section>
    )
}