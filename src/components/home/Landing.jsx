import { useState } from 'react'
import '../../styles/home/Landing.css'
import phoneMockup from '../../assets/home/desktop/illustration-phone-mockup.png'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'


export default function Landing() {
    return (
        <div className="Landing">
            <div className="flex-container bgCircle-container">
                <img
                    src={bgCircle}
                    className='bgCircle'
                    alt="" />
            </div>
            <div className="flex-container hero-img-wrapper">
                <img src={phoneMockup}
                    alt="phone mockup"
                    className='phone-mockup' />
            </div>
            <div className="cta">
                <h1 className=''>
                    Start building with our APIs for absolutely free.
                </h1>
                <input
                    type="email"
                    className='email'
                    placeholder='Enter email address' />
                <button className='prim-btn'>Schedule a Demo</button>
                <p>Have any questions? <a href="#">Contact Us</a></p>
            </div>
        </div >
    )
}