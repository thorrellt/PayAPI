import { useState, useEffect } from 'react'
import close from '../../assets/shared/mobile/close.svg'



export default function CTAModal(props) {
    const closeModal = props.onCloseModalClick

    return (
        <div className="SubmitModal">
            <button onClick={closeModal} className='menu-exit-btn'>
                <img src={close} className='close' />
            </button>
            <h3>Thank you</h3>
            <p>lets pretend like your information was actually sent at this time</p>
            <p>Ok, byeee!!</p>
        </div>

    )
}