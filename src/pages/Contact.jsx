import { useState } from 'react'

import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import google from '../assets/shared/desktop/google.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'

import '../styles/Contact.css'


export default function Contact(props) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        title: '',
        message: '',
        updates: false
    })

    const onCheckClick = () => {
        setFormState(prevIsChecked => ({
            ...formState,
            updates: !formState.updates
        }))
    }

    return (
        <main className='Contact'>
            <h1>Submit a help request and we’ll get in touch shortly.</h1>

            <form>
                <div className="input-container flex-container">
                    <input type="text" id='name' name='name' />
                    <label htmlFor="name">Name</label>

                </div>

                <div className="input-container flex-container">
                    <input type="email" id='email' name='email' />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-container flex-container">
                    <input type="text" id='company' name='company' />
                    <label htmlFor="company">Company Name</label>
                </div>

                <div className="input-container flex-container">
                    <input type="text" id='title' name='title' />
                    <label htmlFor="title">Title</label>
                </div>

                <div className="input-container flex-container">
                    <textarea id='message' name='message' />
                    <label htmlFor="message" rows="4" cols="50">Message</label>
                </div>

                <div className="checkbox-container flex-container">
                    <label className="checkbox-wrapper">
                        <input
                            type="checkbox"
                            defaultChecked={formState.updates}
                            onClick={onCheckClick} />
                        <span className="checkmark" />
                        <p>
                            Stay up-to-date with company announcements and updates to our API
                        </p>
                    </label>
                </div>

                <button className='sec-btn-light'>Submit</button>

            </form>

            <section className="clients">
                <h4>
                    Join the thousands of innovators already building with us
                </h4>

                <div className="client-logos">
                    <img src={tesla} alt="tesla" className="logo" />
                    <img src={microsoft} alt="microsoft" className="logo" />
                    <img src={hewlettPackard} alt="hewlett packard" className="logo" />
                    <img src={oracle} alt="oracle" className="logo" />
                    <img src={google} alt="google" className="logo" />
                    <img src={nvidia} alt="nvidia" className="logo" />
                </div>

            </section>

        </main>
    )
}