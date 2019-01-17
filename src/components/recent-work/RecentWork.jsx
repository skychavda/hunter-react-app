import React from 'react';
import './recentWork.css';
import Gallery from './Gallery';

class RecentWork extends React.Component{
    render(){
        return(
            <div className="recent-work-wrapper" id="testimonial">
                <div className="master-padding text-center padding-bottom">
                    <h3>Recent Work</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Gallery/>
                </div>
                <div className="work-with-us-wrapper text-center">
                    <div className="master-padding">
                        <h4 style={{textTransform:"uppercase", color:"#fff"}}><span style={{color:"#11c711"}}>work with us</span> we provide best service</h4>
                        <p style={{marginBottom:"0.33em", textTransform: "capitalize", color:"#fff"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className="work-btn">Start Proejct</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentWork;