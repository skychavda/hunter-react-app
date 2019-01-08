import React from 'react';
import './services.css';
import FirstServices from './FirstServices';
import SecondServices from './SecondServices';

class Services extends React.Component{
    state ={
        firstServices: [
            {icon: "fab fa-html5", name: "web-design", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"},
            {icon: "fas fa-code", name: "web-development", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"},
            {icon: "fas fa-bullhorn", name: "digital marketing", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"} 
        ],
        secondServices: [
            {icon: "fas fa-cloud-download-alt", name: "web-hosting", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"},
            {icon: "fas fa-headphones", name: "online support", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"},
            {icon: "fas fa-bug", name: "fix server error", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nisi ipsum, alias voluptatum blanditiis earum repellat praesentium"} 
        ]
    }
    render(){
        const firstRow = [];
        this.state.firstServices.forEach((service)=>{
            firstRow.push(
                <FirstServices serivce={service} key={service.name}/>
            );
        });
        this.state.secondServices.forEach((service)=>{
            firstRow.push(
                <SecondServices serivce={service} key={service.name}/>
            );
        });
        return(
            <div className="services-wrapper">
                <div className="master-padding text-center services">
                    <h5 style={{textTransform: "uppercase"}}>what we provide</h5>
                    <p style={{textTransform: "capitalize"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {firstRow}
                    </div>
                </div>
                <div className="work-together text-center">
                    <div className="master-padding">
                        <h4 style={{textTransform:"uppercase", color:"#fff"}}>let's work together!</h4>
                        <p style={{marginBottom:"0.33em", textTransform: "capitalize", color:"#fff"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button className="work-btn">Start Proejct</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;