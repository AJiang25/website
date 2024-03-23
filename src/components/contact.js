import React, {Component} from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            status: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault;
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({status: "SUCCESS"});
            } else {
                this.setState({status: "ERROR"});
            }
        };
        xhr.send(data);
    }

    render() {
        if (this.probs.data) {
            let name = this.props.data.name;
            let city = this.props.data.address.city;
            let state = this.props.data.address.state;
            let zip = this.props.data.address.zip;
            let phone = this.props.data.phone;
            const { status } = this.state;
            return (
                <section id = "contact">
                    <div className = "row section-head">
                        <div className = "two columns header-col">
                            <h1>
                                <span> Get in Touch </span>
                            </h1>

                        </div>
                        <div className = "ten columns"> 
                            <p> Feel free to contact me </p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "eight columns">
                            <form
                                onSubmit={this.handleSubmit}
                                id="contact-form"
                                name="contact-form"
                                action="https://formspree.io/f/xzbnbdaz"
                                method="POST"   
                            >
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">
                                            Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            size="35"
                                            id="contactName"
                                            placeholder="Name Required"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            size="35"
                                            id="contactEmail"
                                            placeholder="Email Required"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactSubject">
                                            Subject 
                                        </label>
                                        <input
                                            type="text"
                                            size="35"
                                            id="contactSubject"
                                            placeholder="subject"
                                            name="subject"
                                            value={this.state.subject}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Message <span className="required">*</span>
                                        </label>
                                        <textarea
                                            cols="50"
                                            rows="15"
                                            id="contactMessage"
                                            placeholder="Main Message"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                        ></textarea>
                                    </div>

                                    <div>
                                        {status === "SUCCESS" ? (
                                        <p>Thanks!</p>
                                        ) : (
                                        <button type="submit" className="submit">
                                            Submit
                                        </button>
                                        )}
                                        {status === "ERROR" && <p>Ooops! There was an error.</p>}

                                        <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                        </span>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        <aside className="four columns footer-widgets">
                            <div className="widget widget_contact">
                                <h4>Contact Info</h4>
                                <p className="address">
                                {name}
                                <br />
                                {city}, {state} {zip}
                                <br />
                                <span>{phone}</span>
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
            );
        } else {
            return <div/>;
        }
    }
}

export default Contact;