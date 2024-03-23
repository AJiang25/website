import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="copyright">
                            <li> &copy; 2024 Arnold Jiang </li>
                        </ul>
                    </div>
                    <div id="go-top"> 
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;