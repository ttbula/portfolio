import "./Experience.css"

const Experience = () => {
    return (
        <div className='exp'>
            <h5>What I can do</h5>
            <h2>Experience</h2>
            <div className="exp-container">
                <div className="exp-frontend">
                    <h3>Front-end</h3>
                    <div>
                        <h4>HTML</h4>
                        <small className="small">1+ year</small>
                    </div>
                    <div>
                        <h4>CSS</h4>
                        <small className="small">1+ year</small>
                    </div>
                    <div>
                        <h4>JavaScript</h4>
                        <small className="small">1+ year</small>
                    </div>
                    <div>
                        <h4>ReactJS</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>Bootstrap</h4>
                        <small className="small">4+ months</small>
                    </div>

                </div>
                <div className="exp-backend">
                    <h3>Back-end</h3>
                    <div>
                        <h4>NodeJs</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>NodeJs</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>PostgreSQL</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>MongoDB</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>Python</h4>
                        <small className="small">4+ months</small>
                    </div>
                    <div>
                        <h4>C++</h4>
                        <small className="small">4+ months</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Experience