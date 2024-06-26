import React, {Component} from 'react';

class Header extends Component {
    render() {
        if(this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.city;
        }

        return(
            <header id = "home">
                <nav id = "nav-wrap">
                    <a className = "mobile-btn" href = "#nav-wrap" title = "Show Navigation">
                        Show Navigation
                    </a>
                    <a className = "mobile-btn" href = "#" title = "Hide Navigation">
                        Hide Navigation
                    </a>
                    <ul id = "nav" className = "nav">
                        <li className = "current">
                            <a className = "smoothescroll" href = "#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className = "smoothescroll" href = "#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className = "smoothescroll" href = "#resume">
                                Resume
                            </a>
                        </li>
                        <li>   
                            <a className = "smoothescroll" href = "#portfolio">
                                Works
                            </a>
                        </li>
                        <li>
                            <a className = "smoothescroll" href = "#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className = "row banner">
                    <div className = "banner-text">
                        <h1 className = "responsive-headline"> {name} </h1>
                        <h3>
                            I'm a <span>{occupation}</span> from {city}. {description}
                        </h3>
                        <hr/>
                     </div>
                </div>
                <p className = "scrolldown">
                    <a className = "smoothscroll" href = "#about"> 
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;