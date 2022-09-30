import { useState, useEffect } from 'react'

import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import google from '../assets/shared/desktop/google.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'

import SubmitModal from '../components/contact/SubmitModal'
import '../styles/Contact.css'


export default function Contact(props) {
    /*****************************
      CONTROLLED FORM & FUNCTIONS
     *****************************/
    const [formState, setFormState] = useState({
        name: {
            value: '',
            valid: true
        },
        email: {
            value: '',
            valid: true
        },
        company: {
            value: '',
            valid: true
        },
        title: {
            value: '',
            valid: true
        },
        message: {
            value: '',
            valid: true
        },
        updates: {
            value: false,
            valid: true
        }
    })

    const clearFormState = () => {
        setFormState({
            name: {
                value: '',
                valid: true
            },
            email: {
                value: '',
                valid: true
            },
            company: {
                value: '',
                valid: true
            },
            title: {
                value: '',
                valid: true
            },
            message: {
                value: '',
                valid: true
            },
            updates: {
                value: false,
                valid: true
            }
        })
    }

    const makeFieldInvalid = (inputField) => {
        setFormState(prevFormState => ({
            ...prevFormState,
            [inputField]: {
                ...prevFormState.inputField,
                valid: false
            }

        }))
        console.log(inputField + ' changed')

    }

    const onFormChange = (event) => {
        const name = event.target.id
        const newValue = event.target.value
        const type = event.target.type

        if (type != "checkbox")
            setFormState(prevFormState => ({
                ...prevFormState,
                [name]: {
                    ...prevFormState.name,
                    value: newValue,
                    valid: true
                }
            }))
    }

    const [formValid, setFormValid] = useState(() => true)
    const [modalVisible, setModalVisible] = useState(() => false)

    /*********************************
      FORM & FIELD VALIDITY FUNCTIONS
     *********************************/
    const checkFormValidity = () => {
        let isValid = true
        setFormValid(true)
        for (const inputField in formState) {
            if (inputField !== 'updates' &&
                formState[inputField].valid === false) {
                setFormValid(false)
                isValid = false
            }
        }
    }

    const checkEmailValidity = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isValid = re.test(formState.email.value
            .toLowerCase())
        return isValid
    }

    //used to manage when submit button is disabled
    useEffect(checkFormValidity,
        [formState.name.valid,
        formState.email.valid,
        formState.company.valid,
        formState.title.valid,
        formState.message.valid
        ]
    )

    /********************
      ON CLICK FUNCTIONS
     ********************/
    const onCloseModalClick = () => {
        setModalVisible(false)
        console.log('modal closed')
    }

    const onCheckClick = () => {
        setFormState(prevFormState => ({
            ...formState,
            updates: {
                ...prevFormState,
                value: !formState.updates.value
            }
        }))
    }

    const onSumbitClick = (event) => {
        event.preventDefault()

        let isFormValid = true

        for (const inputField in formState) {
            if (inputField !== 'updates' &&
                formState[inputField].value === '') {
                makeFieldInvalid(inputField)
                isFormValid = false
                setFormValid(false)
            }
        }

        if (!checkEmailValidity()) {
            makeFieldInvalid('email')
            isFormValid = false
        }

        if (isFormValid) {
            setModalVisible(true)
            clearFormState()
        }
    }

    return (
        <main className='Contact flex-container'>
            <div className="title-wrapper">
                <h2>Submit a help request and we’ll get in touch shortly.</h2>
            </div>

            {modalVisible &&
                <SubmitModal
                    onCloseModalClick={onCloseModalClick}
                />}

            <form className='flex-container'>
                <div className="input-container flex-container">
                    {formState.name.valid === false && <span className="input-error">This field can't be empty</span>}
                    <input
                        onChange={onFormChange}
                        type="text"
                        id='name'
                        name='name'
                        value={formState.name.value} />
                    <label htmlFor="name">Name</label>

                </div>

                <div className="input-container flex-container">
                    {formState.email.valid === false && <span className="input-error">Must include a valid email</span>}
                    <input
                        onChange={onFormChange}
                        type="email"
                        id='email' name='email'
                        value={formState.email.value} />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-container flex-container">
                    {formState.company.valid === false && <span className="input-error">This field can't be empty</span>}
                    <input
                        onChange={onFormChange}
                        type="text"
                        id='company'
                        name='company'
                        value={formState.company.value} />
                    <label htmlFor="company">Company Name</label>
                </div>

                <div className="input-container flex-container">
                    {formState.title.valid === false && <span className="input-error">This field can't be empty</span>}
                    <input
                        onChange={onFormChange}
                        type="text"
                        id='title'
                        name='title'
                        value={formState.title.value} />
                    <label htmlFor="title">Title</label>
                </div>

                <div className="input-container flex-container">
                    {formState.message.valid === false && <span className="input-error">This field can't be empty</span>}
                    <textarea
                        onChange={onFormChange}
                        id='message'
                        name='message'
                        value={formState.message.value} />
                    <label htmlFor="message">Message</label>
                </div>

                <div className="checkbox-container flex-container">
                    <label className="checkbox-wrapper flex-container">
                        <input
                            type="checkbox"
                            checked={formState.updates.value}
                            onClick={onCheckClick}
                            onChange={onFormChange} />
                        <span className="checkmark" />
                        <p>
                            Stay up-to-date with company announcements and updates to our API
                        </p>
                    </label>
                </div>

                <button
                    onClick={onSumbitClick}
                    className='sec-btn-light submit-btn'
                    disabled={!formValid}>
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