import { useState } from 'react'
import CTA from '../shared/CTA'
import Circle from '../shared/Circle'
import '../../styles/home/Landing.css'
import phoneMockup from '../../assets/home/desktop/illustration-phone-mockup.png'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'


export default function Landing() {
    return (
        <div className="Landing">
            <Circle />
            <div className="flex-container hero-img-wrapper">
                <img src={phoneMockup}
                    alt="phone mockup"
                    className='phone-mockup' />
            </div>
            <div className="cta">
                <h1 className=''>
                    Start building with our APIs for absolutely free.
                </h1>
                <CTA />
                <p>Have any questions? <a href="#">Contact Us</a></p>

            </div>
        </div >
    )
}