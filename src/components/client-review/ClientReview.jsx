import React from 'react';
import './client.css';
import Slider from 'react-slick';

class ClientReview extends React.Component{
    render(){
        const setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
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
        return(
            <div className="client-review-wrapper text-center">
                <div className="master-padding">
                    <h3>What our client says</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="client-slider master-padding" style={{overflow: "hidden",paddingLeft:"8px"}}>
                    <Slider {...setting}>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                        <div className="row display">
                            <div className="col-md-4">
                                <img className="client-circle-img" src={require("../../men.jpg")}/>
                                <img src={require("../../signature.png")} style={{width:"70px", margin:"1px auto"}}/>
                            </div>
                            <div className="col-md-8 text-style">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa deserunt veniam doloribus itaque praesentium</p>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                                <i className="fas fa-star icon-star-color"></i>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="video-wrapper text-center">
                    <div className="master-padding">
                        <h4 style={{textTransform:"uppercase", color:"#fff"}}>watch our awsome <span style={{color:"#11c711"}}>video</span></h4>
                        <i className="fas fa-play-circle video-icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientReview;