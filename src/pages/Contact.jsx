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

    const onFormChange = (event) => {
        const name = event.target.id
        const value = event.target.value
        const type = event.target.type

        if (type != "checkbox")
        setFormState(prevFormState => ({
            ...prevFormState,
            [name]:value 
        }))
    }

    const onCheckClick = () => {
        setFormState(prevIsChecked => ({
            ...formState,
            updates: !formState.updates
        }))
    }

    return (
        <main className='Contact flex-container'>
            <div className="title-wrapper">
                <h2>Submit a help request and we’ll get in touch shortly.</h2>
            </div>

            <form className='flex-container'>
                <div className="input-container flex-container">
                    <input 
                    onChange={onFormChange} 
                    type="text" 
                    id='name' 
                    name='name'
                    value={formState.name} />
                    <label htmlFor="name">Name</label>

                </div>

                <div className="input-container flex-container">
                    <input 
                    onChange={onFormChange} 
                    type="email" 
                    id='email' name='email'
                    value={formState.email}  />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-container flex-container">
                    <input 
                    onChange={onFormChange} 
                    type="text" 
                    id='company' 
                    name='company'
                    value={formState.company}  />
                    <label htmlFor="company">Company Name</label>
                </div>

                <div className="input-container flex-container">
                    <input 
                    onChange={onFormChange} 
                    type="text" 
                    id='title' 
                    name='title'
                    value={formState.title}  />
                    <label htmlFor="title">Title</label>
                </div>

                <div className="input-container flex-container">
                    <textarea 
                    onChange={onFormChange} 
                    id='message' 
                    name='message' 
                    value={formState.message} />
                    <label htmlFor="message">Message</label>
                </div>

                <div className="checkbox-container flex-container">
                    <label className="checkbox-wrapper flex-container">
                        <input
                            type="checkbox"
                            checked={formState.updates}
                            onClick={onCheckClick}
                            onChange={onFormChange}  />
                        <span className="checkmark" />
                        <p>
                            Stay up-to-date with company announcements and updates to our API
                        </p>
                    </label>
                </div>

                <button className='sec-btn-light submit-btn'>
                    Submit
                </button>

            </form>

            <section className="clients">
                <h3>
                    Join the thousands of innovators already building with us
                </h3>

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