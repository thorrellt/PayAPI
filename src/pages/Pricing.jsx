import '../styles/Pricing.css'
import PricePackage from '../components/pricing/PricePackage'
import pricingData from '../components/pricing/pricingData.js'


export default function Pricing(props) {
    const pricingPackages = pricingData.map(plan => {
        return (
            <PricePackage 
                name = {plan.name}
                description = {plan.description}
                price = {plan.price}
                features = {plan.features}
            />
        )
    })
    return (
        <section className='Pricing flex-container'>
            <h2>Pricing</h2>
            <div className="packages">
                {pricingPackages}
            </div>
        </section>
    )
}