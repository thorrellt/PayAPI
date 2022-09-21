import circle from '../../assets/shared/desktop/bg-pattern-circle.svg'
import '../../styles/shared/Circle.css'

export default function Circle() {
    return (
        <div className="flex-container circle-container">
            <img
                src={circle}
                className='circle'
                alt="" />
        </div>
    )
}