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
            arrows: false
        };
        return(
            <div className="client-review-wrapper text-center">
                <div className="master-padding">
                    <h3>What our client says</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="client-slider" style={{overflow: "hidden"}}>
                    <Slider {...setting}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ClientReview;