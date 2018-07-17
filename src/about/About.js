import React from 'react';

const About = () => {
    return (
        <div id="about" className="about-me pd-t-b-144">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <img className="img-responsive about-img" src={require('../img/about.jpg')} alt="About Me" />
                    </div>
                    <div className="col-md-6 col-sm-6 about-text">
                        <h3>Hello!</h3>
                        <h2>I'm Krunal Wankhede</h2>
                        <p></p>
                        <div className="about-me-info">
                            <h4><span>Name:</span> Krunal Wankhede</h4>
                        </div>
                        <div className="about-me-info">
                            <h4><span>Mobile:</span> 8976784394</h4>
                        </div>
                        <div className="about-me-info">
                            <h4><span>Email:</span> <a className='' href='mailto:krunalwnkhd@gmail.com'>krunalwnkhd@gmail.com</a></h4>
                        </div>
                        <a className="btn btn-dark" href={require('../img/krunalWankhede-resume.docx')} download>Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;