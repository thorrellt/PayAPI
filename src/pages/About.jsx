import '../styles/About.css'
import mobileTeam from '../assets/about/mobile/image-team-members.jpg'
import desktopTeam from '../assets/about/desktop/image-team-members.jpg'
import Circle from '../components/shared/Circle'


export default function About(props) {
    return (
        <main className='About'>
            <h2>We empower innovators
                by delivering access to the financial system</h2>

            <section>
                <h3>Our Vision</h3>
                <p>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            </section>
            <section>
                <h3>Our Business</h3>
                <p>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
            </section>

            <img className='mobile-team-img' src={mobileTeam} alt="team picture" />
            <div className="img-container">
                <img className='desktop-team-img' src={desktopTeam} alt="team picture" />
                <Circle />
            </div>


            <div className="statistics flex-container">
                <div className="stat flex-container">
                    <p>Team Members</p>
                    <h1>300+</h1>
                </div>
                <div className="stat flex-container">
                    <p>Offices in the Us</p>
                    <h1>3</h1>
                </div>
                <div className="stat flex-container">
                    <p>Transactions analyzed</p>
                    <h1>10M+</h1>
                </div>
            </div>
            <section>
                <h3>The Culture</h3>
                <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </section>
            <section>
                <h3>The People</h3>
                <p>We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.</p>
            </section>
        </main>
    )
}