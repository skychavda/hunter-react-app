import React from 'react';
import './about.css';

class About extends React.Component{
    render(){
        return(
            <div className="story-wrapper">
                <div className="master-padding story-padding">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h3>Our story</h3>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequuntur a dolorem laborum officiis magnam nulla ad animi omnis sed. Consequatur asperiores dolor hic. Eum sint corporis atque sed explicabo.</p>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="story-btn">Read more</button>
                        </div>
                        <div className="col-md-4 col-12">
                            Video
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;