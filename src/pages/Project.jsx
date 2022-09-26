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
            <div className="portfolio-wrapper">
                <p>
                    For more of my work, you can visit my portfolio below.
                </p>
                <button className="prim-btn">
                    My Portfolio
                </button>
            </div>
            <div className="my-links">
                <a href="https://github.com/thorrellt" target="_blank"
                    rel="noopener noreferrer" title="github.com/thorrellt">
                    <button className="sec-btn-light">
                        <i className="devicon-github-original" />
                    </button>
                </a>


                <a href="https://www.linkedin.com/in/thorrellt/" target="_blank"
                    rel="noopener noreferrer" title="github.com/thorrellt">
                    <button className="sec-btn-light">
                        <i className="devicon-linkedin-plain" />
                    </button>
                </a>

                <a href="mailto:thorrellt@gmail.com" target="_blank"
                    rel="noopener noreferrer" title="thorrellt@gmail.com">
                    <button className="sec-btn-light">
                        <i className="bi bi-envelope" />
                    </button>
                </a>

            </div>
        </main>
    )
}