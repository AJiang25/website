import React, {Component} from 'react';

class Portfolio extends Component {
    render() {
        if (this.props.data) {
            var Portfolio = this.props.data.projects.map(function(projects) {
                var imageUrl = 'images/portfolio/' + projects.image;
                return <div className = "columns portfolio-item">
                    <div className = "item-wrap">
                        <a href = {projects.modal} title = {projects.title}>
                            <img alt = {projects.title} src = {imageUrl}/>
                            <div className = "overlay">
                                <div className = "portfolio-item-meta">
                                    <h5>{projects.title}</h5>
                                    <p>{projects.category}</p>
                                </div>
                            </div>
                        </a>
                    </div>    
                </div>
            });
        }

        return(
            <section id = "portfolio">
                <div className = "row">
                    <div className = "twelve columns collapsed">
                        <h1> Check Out Some of My Works. </h1>
                        <div id = "portfolio-wrapper" className = "bgrid-quarters s-bgrid-thirds cf">
                            {portfolio}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;