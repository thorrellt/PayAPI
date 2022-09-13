import { useState } from 'react'
import '../../styles/home/Hero.css'
import iconBankingCoverage from '../../assets/home/desktop/icon-banking-and-coverage.svg'
import iconConsumerPayments from '../../assets/home/desktop/icon-consumer-payments.svg'
import iconPersonalFinances from '../../assets/home/desktop/icon-personal-finances.svg'
import imgImplement from '../../assets/home/desktop/illustration-easy-to-implement.svg'
import imgSimpleUI from '../../assets/home/desktop/illustration-simple-ui.svg'


export default function Hero() {
    return (
        <div className="Hero flex-container">
            <img src={imgImplement} alt="Easy to Impliment" />
            <div className="detail">
                <h2>Easy to implement</h2>
                <p>
                    Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
                </p>
            </div>

            <img src={imgSimpleUI} alt="Simple UI UX" />
            <div className="detail">
                <h2>Simple UI & UX</h2>
                <p>
                    Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.
                </p>
            </div>

            <div className="feature flex-container">
                <img src={iconPersonalFinances} alt="Personal Finances" />
                <h5>Personal Finances</h5>
                <p>
                    Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.
                </p>
            </div>
            <div className="feature flex-container">
                <img src={iconBankingCoverage} alt="Banking & Coverage" />
                <h5>Banking & Coverage</h5>
                <p>
                    With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                </p>
            </div>
            <div className="feature flex-container">
                <img src={iconConsumerPayments} alt="Consumer Payments" />
                <h5>Consumer Payments</h5>
                <p>
                    It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
                </p>
            </div>
        </div>
    )
}