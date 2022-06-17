import './About.css'

const About = () => {
    return (
        <div className="about">
            <h5>Get to know Tim</h5>
            <h2>About Me</h2>
            <div className='about_content'>
                <div className='about_cards'>
                     <article className='about_card'>
                         <h5>Experience</h5>
                         <small>5+ months of software development</small>
                     </article>
                     <article className='about_card'>
                         <h5>Military</h5>
                         <small>Air Force veteran with 7 years of active duty service</small>
                     </article>
                     <article className='about_card'>
                         <h5>Projects</h5>
                         <small>3+ completed projects</small>
                     </article>
                </div>
                <p className='sent'>An Air Force veteran turned software developer who enjoys tackling new tasks and gaining skills and is a lifelong learner.</p>
            </div>
        </div>
    )
}

export default About