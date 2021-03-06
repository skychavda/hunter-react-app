import React from 'react';
import { Link } from 'react-scroll';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            scrollclass: 'sticky-nav-blur',
            color: 'rgba(82, 86, 89, 0.7)',
            collapsed: "collapsed",
            aria: false
        };
    }


    listenScrollEvent = e => {
        if (window.pageYOffset > 10) {
            this.setState({ scrollclass: 'sticky-nav' })
        } else {
            this.setState({ scrollclass: 'sticky-nav-blur' })
        }
        if (window.innerWidth < 992) {
            if (this.state.aria === false) {
                this.setState({ collapsed: "collapsed", aria: !this.state.aria });
            } else {
                this.setState({ collapsed: "", aria: !this.state.aria })
            }
        }
    }

    listenClickEvent = e => {
        if (window.innerWidth < 992) {
            if (this.state.aria === false) {
                this.setState({ collapsed: "collapsed", aria: !this.state.aria });
            } else {
                this.setState({ collapsed: "", aria: !this.state.aria })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('click', this.listenClickEvent)
    }

    render() {
        let toggle;
        if (window.innerWidth < 992) {
            toggle = {
                "data-toggle": "collapse",
                "data-target": "#menu"
            }
        } else {
            toggle = "";
        }
        return (
            <div className={"navbar navbar-expand-lg custome-toggler navbar-light navigation-wrapper master-padding " + this.state.scrollclass}>
                <a href="#home" className="navbar-brand"><h2 style={{ marginBottom: 0, color: "#58f579", fontWeight: "bolder" }}>H<span style={{ fontSize: "20px", color: "#fff", fontWeight: 100 }}>hunter</span></h2></a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="true" aria-label="Toggle navigation" style={{ borderColor: "#117c1e" }}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={"navbar-collapse collapse justify-content-end " + this.state.collapsed} id="menu" {...toggle} aria-expanded={this.state.aria}>
                    <ul className="navbar-nav">
                        {/* {home} */}

                        <li className="nav-item " >
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "" ? "header-active" : "")} href="#home">Home</a></div> */}
                            <div className="nav-link header-a" >
                                <Link activeClass=" header-active" to="home" spy={true} smooth={true} duration={100} >
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#about" ? "header-active" : "")} href="#about">About</a></div> */}
                            <div className="nav-link header-a" >
                                <Link activeClass=" header-active" to="about" spy={true} smooth={true} duration={100}>
                                    About
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#service" ? "header-active" : "")} href="#service" >Service</a></div> */}
                            <div className="nav-link header-a" >
                                <Link activeClass=" header-active" to="service" spy={true} smooth={true} duration={100}>
                                    Service
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#team" ? "header-active" : "")} href="#team" >Team</a></div> */}
                            <div className="nav-link header-a" >
                                <Link activeClass=" header-active" to="team" spy={true} smooth={true} duration={100}>
                                    Team
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#testimonial" ? "header-active" : "")} href="#testimonial" >Testimonial</a></div> */}
                            <div className="nav-link header-a">
                                <Link activeClass=" header-active" to="testimonial" spy={true} smooth={true} duration={100}>
                                    Testimonial
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#blog" ? "header-active" : "")} href="#blog" >Blog</a></div> */}
                            <div className="nav-link header-a">
                                <Link activeClass=" header-active" to="blog" spy={true} smooth={true} duration={100}>
                                    Blog
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* <div className="nav-link nav-btn" data-toggle="collapse" data-target="#menu"><a className={"header-a " + (selected === "#contact" ? "header-active" : " ")} href="#contact">Contact</a></div> */}
                            <div className="nav-link header-a">
                                <Link activeClass=" header-active" to="contact" spy={true} smooth={true} duration={100}>
                                    Contact
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;