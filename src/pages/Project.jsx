import Circle from '../components/shared/Circle'
import '../styles/Project.css'
import profilePic from '../assets/shared/desktop/profile_pic.png'
import circle from '../assets/shared/desktop/bg-pattern-circle.svg'


export default function Project(props) {
    return (
        <main className='Project flex-container'>
            <h2>Hi, I'm Thorrell</h2>
            <div className="img-container flex-container">
                <img src={profilePic} alt="Thorrell's Picture" />
                <Circle />
            </div>
            <p>
                I'm a Washington Metropolitan based Software Developer transitioning into tech after 15+ years in public relations & customer service.
            </p>
            <div className="portfolio-wrapper flex-container">
                <p>
                    In order to learn more about me, view my work, or contact me, please visit my links below.
                </p>
                <button className="prim-btn">
                    My Portfolio
                </button>
            </div>
            <div className="my-links flex-container">
                <a href="https://github.com/thorrellt" target="_blank"
                    rel="noopener noreferrer" title="github.com/thorrellt">
                        <i className="bi bi-github" />
                </a>


                <a href="https://www.linkedin.com/in/thorrellt/" target="_blank"
                    rel="noopener noreferrer" title="linkedin.com/in/thorrellt">
                        <i className="bi bi-linkedin" />
                    
                </a>

                <a href="mailto:thorrellt@gmail.com" target="_blank"
                    rel="noopener noreferrer" title="thorrellt@gmail.com">
                        <i className="bi bi-envelope" />
                   
                </a>

            </div>
        </main>
    )
}