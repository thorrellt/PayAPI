import { useState } from 'react'
import '../../styles/home/Landing.css'
import phoneMockup from '../../assets/home/desktop/illustration-phone-mockup.svg'


export default function Landing(){
    return(
        <div className="Landing">
            <img src={phoneMockup} 
            alt="phone mockup"
            className='phone-mockup' />
            <div className="cta">
                <input 
                type="email"
                className='email'
                placeholder='Enter email address' />
                <button className='prim-btn'></button>
            </div>
        </div>
    )
}