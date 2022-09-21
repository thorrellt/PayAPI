import '../../styles/Pricing.css'
import check from '../../assets/shared/desktop/icon-check.svg'

export default function PricePackage(props) {
    const {name, description, price, features} = props

    return (
        <section className='package flex-container'>
            <h4 className='name'>{name}</h4>
            <p className='description'>
                {description}
            </p>
            <h1 className='price'>{`$${price}`}</h1>
            
            <div className="divider"></div>

            <ul className='features flex-container'>
                <li 
                className={features.transaction ? '' : 'inactive'}>
                    <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Transaction</p>
                    </div>
                </li>
                <li 
                className={features.auth ? '' : 'inactive'}>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Auth</p>
                    </div>
                </li>
                <li 
                className={features.identity ? '' : 'inactive'}>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Identity</p>
                    </div>
                </li>
                <li 
                className={features.investments ? '' : 'inactive'}>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Investments</p>
                    </div>
                </li>
                <li 
                className={features.assets ? '' : 'inactive'}>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Assets</p>
                    </div>
                </li>
                <li 
                className={features.liabilities ? '' : 'inactive'}>
                <div className="check-wrapper">
                        <img src={check} alt="" />
                    </div>
                    <div className="title">
                        <p>Liabilities</p>
                    </div>
                </li>
                <li 
                className={features.income ? '' : 'inactive'}>
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