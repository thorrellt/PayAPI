import '../styles/Pricing.css'
import PricePackage from '../components/pricing/PricePackage'


export default function Pricing(props) {
    return (
        <section className='Pricing flex-container'>
            <h2>Pricing</h1>
            <div className="packages">
                <PricePackage />
            </div>
        </section>
    )
}