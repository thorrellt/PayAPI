import { useState } from 'react'
import '../../styles/home/Clients.css'

import Circle from '../shared/Circle'

import tesla from '../../assets/shared/desktop/tesla.svg'
import microsoft from '../../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../../assets/shared/desktop/oracle.svg'
import google from '../../assets/shared/desktop/google.svg'
import nvidia from '../../assets/shared/desktop/nvidia.svg'


export default function Clients() {
    return (
        <div className="Clients flex-container">
            <div className="client-logos">
                <img src={tesla} alt="tesla" className="logo" />
                <img src={microsoft} alt="microsoft" className="logo" />
                <img src={hewlettPackard} alt="hewlett packard" className="logo" />
                <img src={oracle} alt="oracle" className="logo" />
                <img src={google} alt="google" className="logo" />
                <img src={nvidia} alt="nvidia" className="logo" />
            </div>

            <div className="content flex-container">
                <h2>Who we work with</h2>
                <p>
                    Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.
                </p>
                <button className="sec-btn-dark about-us-btn">
                    About Us
                </button>
            </div>
            <Circle />
        </div>
    )
}
