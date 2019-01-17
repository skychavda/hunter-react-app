import React from 'react';
import './about.css';

class About extends React.Component{
    render(){
        return(
            <div className="story-wrapper" id="about">
                <div className="master-padding story-padding">
                    <div className="row">
                        <div className="col-md-8 col-12 our-story">
                            <h3>Our story</h3>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequuntur a dolorem laborum officiis magnam nulla ad animi omnis sed. Consequatur asperiores dolor hic. Eum sint corporis atque sed explicabo.</p>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="story-btn">Read more</button>
                        </div>
                        <div className="col-md-4 col-12 our-video">
                            <div className="embed-responsive embed-responsive-4by3" style={{backgroundColor: "#000000"}}>
                                <div className="embed-responsive-item">
                                    <video autoplay name="media" muted loop autoPlay style={{width:"100%", height:"100%"}}>
                                        <source src={require("../../about-video.mp4")} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;