import '../styles/Pricing.css'
import PricePackage from '../components/pricing/PricePackage'
import pricingData from '../components/pricing/pricingData.js'


export default function Pricing(props) {
    return (
        <section className='Pricing flex-container'>
            <h2>Pricing</h2>
            <div className="packages">
                <PricePackage />
            </div>
        </section>
    )
}