import React from 'react';
import './price.css';
import PriceList from './PriceList';
import Slider from 'react-slick';
import service1 from '../../service1.png';
import service2 from '../../service2.png';
import service3 from '../../service3.png';
import service4 from '../../service4.png';
import service5 from '../../service5.png';

class Price extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pricelist: [
                {title:"basic",price:"$10 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
                {title:"standard",price:"$50 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
                {title:"gold",price:"$70 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
                {title:"premium",price:"$99 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"}
            ]
        }
    }

    render(){
        const setting = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        const pricelist = [];
        this.state.pricelist.forEach((list)=>{
            pricelist.push(
                <PriceList pricelist={list} key={list.title}/>
            );
        });
        return(
            <div className="price-wrapper">
                <div className="master-padding text-center price-list">
                    <h3 className="capitalize">Service price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {pricelist}
                    </div>
                </div>
                <div className="master-padding client-slider" style={{marginLeft:"6px"}}>
                    <Slider {...setting}>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service1}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service2}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service3}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service4}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service5}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service1}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service2}/></div>
                        <div className="client-border"><img className="img-fluid img" alt="services" src={service3}/></div>
                    </Slider>
                </div>
                <div className="quote-wrapper">
                    <div className="master-padding text-center">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="float-left quote-text">
                                    <h6 style={{textTransform: "uppercase", color:"#fff", textAlign: "left"}}>providing smart logistics solution acrross the world</h6>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <div className="quote-button-align">
                                    <button className="work-btn margin-top">Get A Quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;