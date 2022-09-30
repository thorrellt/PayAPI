import { useState, useEffect } from 'react'
import '../../styles/shared/CTA.css'

export default function CTA() {
    const [emailState, setEmailState] = useState(() => ({
        value: '',
        valid: true
    }))

    const [formValid, setFormValid] = useState(() => true)

    const checkEmailValidity = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isValid = re.test(emailState.value
            .toLowerCase())

        setEmailState(prevFormState => ({
            ...prevFormState,
            valid: isValid

        }))

        if (isValid)
            setFormValid(isValid)
    }

    const onEmailChange = (event) => {
        const newValue = event.target.value

        setEmailState(prevFormState => ({
            ...prevFormState,
            value: newValue
        }))
        console.log(emailState.value)
    }

    const onSumbitClick = (event) => {
        event.preventDefault()

        let isFormValid = true

        if (!emailState.valid) {
            isFormValid = false
        }

        setFormValid(isFormValid)

        if (isFormValid) {
            console.log('formValid' + isFormValid)
        }
    }

    useEffect(checkEmailValidity, [formValid])

    return (
        <form className="cta-form flex-container">
            <input
                onChange={onEmailChange}
                type="email"
                className='email'
                placeholder='Enter email address'
                value={emailState.value} />

            {!formValid && <span className="input-error">This field can't be empty</span>}
            
            <button
                onClick={onSumbitClick}
                className='prim-btn submit-btn'
                disabled={!formValid}>
                Schedule a Demo
            </button>

        </form>
    )
}