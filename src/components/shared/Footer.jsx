import { useState } from 'react'
import '../../styles/shared/Footer.css'
import logo from '../../assets/shared/desktop/logo.svg'
import twitter from '../../assets/shared/desktop/twitter.svg'
import facebook from '../../assets/shared/desktop/facebook.svg'
import linkedin from '../../assets/shared/desktop/linkedin.svg'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'
import CTA from './CTA'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="cta">
                <h2>Ready to start?</h2>
                <CTA />
            </div>

            <footer className='flex-container'>
                <a href="#Home">
                    <img src={logo} alt="PayAPI logo"
                        className='logo' />
                </a>
                <ul className="flex-container">
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
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
                <div className="flex-container bgCircle-container">
                <img
                    src={bgCircle}
                    className='bgCircle'
                    alt="" />
            </div>
            </footer>
            
        </div>
    )
}