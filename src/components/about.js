import React, {Component} from 'react';
import Resume from "../resume/jiang_arnold_resume1.pdf";
import ProfilePicture from "../resume/headshot.jpg";

class About extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var bio = this.props.data.bio;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
        }
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={headshot.jpg} alt="Arnold Jiang Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            I am a 2nd-year Computer Science student at Princeton University.
                        </p>
                        <p>
                            I have a passion for software development and enjoy working on projects that have a positive
                            impact on people's lives. I am always looking to learn new things and improve my skills.
                        </p>
                        <p>
                            I am currently looking for new opportunities in software development. Please feel free to
                            contact me if you have any.
                        </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span>
                                <br />
                                <span>{phone}</span>
                                <br />
                                <span>{email}</span>
                            </p>
                        </div>
                        </div>
                        <div className="columns download">
                            <p>
                                <a 
                                    href={Resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button"
                                >
                                    <i className="fa fa-download"></i>Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;