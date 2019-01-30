import React, { Component } from 'react';
import Slider from 'react-slick';
import './client.css';
import men from "../../men-min.jpg";
import signature from "../../signature.png";


class ClientReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderAutoplay: true
        }
    }

    handleClickEvent = e => {
        if (window.pageYOffset > 4000 && window.pageYOffset < 4500) {
            this.setState({ sliderAutoplay: true });
        } else {
            this.setState({ sliderAutoplay: false });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleClickEvent)
    }

    render() {
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: this.state.sliderAutoplay,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        
        console.log(this.state.sliderAutoplay);
        console.log(setting)
        return (
            <div className="client-review-wrapper text-center" id="testimonial">
                <div className="master-padding">
                    <h3 className="capitalize">What our client says</h3>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="client-slider master-padding" style={{ overflow: "hidden", paddingLeft: "8px" }}>
                    <Slider {...setting}>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div className="icon-star">
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" alt="client" src={men} />
                                <img src={signature} alt="client-signature" style={{ width: "70px", margin: "1px auto" }} />
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <div>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                    <i className="fas fa-star icon-star-color"></i>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="video-wrapper text-center">
                    <div className="master-padding">
                        <h4 style={{ textTransform: "uppercase", color: "#fff" }}>watch our awesome <span style={{ color: "#11c711" }}>video</span></h4>
                        <i className="fas fa-play-circle video-icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientReview;