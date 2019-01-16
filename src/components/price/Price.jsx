import React from 'react';
import './price.css';
import PriceList from './PriceList';
import Slider from 'react-slick';

class Price extends React.Component{
    state = {
        pricelist: [
            {title:"basic",price:"$10 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"standard",price:"$50 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"gold",price:"$70 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"primium",price:"$99 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"}
        ]
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
                    <h3>Service price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {pricelist}
                    </div>
                </div>
                <div className="master-padding client-slider" style={{marginLeft:"6px"}}>
                    <Slider {...setting}>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service1.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service2.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service3.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service4.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service5.jpg")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service1.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service2.png")}/></div>
                        <div className="client-border"><img className="img-fluid img" src={require("../../service3.png")}/></div>
                    </Slider>
                </div>
                <div className="quote-wrapper">
                    <div className="master-padding text-center">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="float-left">
                                    <h6 style={{textTransform: "uppercase", color:"#fff", textAlign: "left"}}>provide smart logistics solution acrros the world</h6>
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