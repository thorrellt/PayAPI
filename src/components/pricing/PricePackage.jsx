import '../../styles/Pricing.css'
import check from '../../assets/shared/desktop/icon-check.svg'

export default function PricePackage(props) {
    return (
        <section className='package flex-container'>
            <h4 className='name'>Free Plan</h4>
            <p className='description'>
                Build and test using our core set of products with up to 100 API requests
            </p>
            <h1 className='price'>$0.00</h1>
            <div className="divider"></div>
            <ul className='features flex-container'>
                <li>
                    <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Transaction</p>
                    </div>
                </li>
                <li>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Auth</p>
                    </div>
                </li>
                <li>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Identity</p>
                    </div>
                </li>
                <li className='inactive'>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Investments</p>
                    </div>
                </li>
                <li className='inactive'>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Assests</p>
                    </div>
                </li>
                <li>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Liabilities</p>
                    </div>
                </li>
                <li>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Income</p>
                    </div>
                </li>
            </ul>
            <div className="divider"></div>
            <button className="sec-btn-light">
                Request Access
            </button>
        </section>
    )
}