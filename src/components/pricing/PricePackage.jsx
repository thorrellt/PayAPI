import '../../styles/Pricing.css'
import check from '../../assets/shared/desktop/icon-check.svg'

export default function PricePackage() {
    return (
        <section className='package'>
            <h4 className='name'>Package Page</h4>
            <p className='description'></p>
            <h1 className='price'></h1>
            <div className="divider"></div>
            <ul className='features'>
                <li>
                    <img src={check} alt="" />
                    <div className="title">
                        <p>Transaction</p>
                    </div>
                </li>
                <li>
                    <img src={check} alt="" />
                    <div className="title">
                        <p>Auth</p>
                    </div>
                </li>
                <li>
                    <img src={check} alt="" />
                    <div className="title">
                        <p>Investments</p>
                    </div>
                </li>
                <li>
                    <img src={check} alt="" />
                    <div className="title">
                        <p>Assests</p>
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