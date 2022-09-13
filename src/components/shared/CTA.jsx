import { useState } from 'react'
import '../../styles/shared/CTA.css'

export default function CTA() {
    return (
        <div className="cta-form flex-container">
            <input
                type="email"
                className='email'
                placeholder='Enter email address' />
            <button className='prim-btn'>Schedule a Demo</button>
        </div>
    )
}