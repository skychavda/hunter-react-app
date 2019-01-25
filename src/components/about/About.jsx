import React from 'react';
import './about.css';
import video from '../../small.mp4';
// import video from 'https://www.youtube.com/watch?v=8Ic2L7ZyFC8';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            autoplay:""
        }
    }

    handleScrollEvent = e =>{
        if(window.pageYOffset>400 && window.pageYOffset<1200){
            this.setState({autoplay:"autoPlay"})
        }else{
            this.setState({autoplay:""});
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScrollEvent);
    }
    render(){
        return(
            <div className="story-wrapper" id="about">
                <div className="master-padding story-padding">
                    <div className="row">
                        <div className="hunter-md-8 col-12 our-story">
                            <h3>Our story</h3>
                            <p className="text-justify sub-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor consequuntur a dolorem laborum officiis magnam nulla ad animi omnis sed. Consequatur asperiores dolor hic. Eum sint corporis atque sed explicabo.</p>
                            <p className="text-justify sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="story-btn">Read more</button>
                        </div>
                        <div className="hunter-md-4 col-12 our-video">
                            <div className="embed-responsive embed-responsive-4by3" style={{backgroundColor: "#000000"}}>
                                <div className="embed-responsive-item">
                                    <video name="media" controls style={{width:"100%", height:"100%"}} muted loop autoplay={this.state.autoplay}>
                                        <source src="http://techslides.com/demos/sample-videos/small.ogv" type='video/ogg; codecs="theora"'/> 
                                        <source src={video} type='video/mp4; codecs="avc1.42E01E"'/>
                                        your browser not support video
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