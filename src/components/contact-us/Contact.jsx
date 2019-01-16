import React from 'react';
import './contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="contactUs-wrapper">
                <div className="master-padding text-center">
                    <h3>Contact Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        <div className="col-md-6 contact-form">
                            <form>
                                <div className="row">
                                    <div className="col input-col"><input type="text" placeholder="Enter Name" className="form-input"/></div>
                                    <div className="col input-col"><input type="text" placeholder="Enter Email" className="form-input"/></div>
                                </div>
                                <div className="row" style={{marginTop:"10px"}}>
                                    <div className="col input-col"><input type="text" placeholder="Enter Phone" className="form-input"/></div>
                                    <div className="col input-col"><input type="text" placeholder="Interest of service" className="form-input"/></div>
                                </div>
                                <div className="row" style={{marginTop:"10px"}}>
                                    <div className="col input-col"><textarea type="text" placeholder="Leave your message" className="form-textarea"/></div>
                                </div>
                                <button type="button" className="form-button">submit</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <p className="text-left border-bottom"><i className="fas fa-map-marker-alt icon-style"></i>4819 Concord Street Charlotte, NC 28209</p>
                            <p className="text-left border-bottom"><i className="fas fa-envelope icon-style"></i>example@gmail.com</p>
                            <p className="text-left border-bottom"><i className="fas fa-phone icon-style"></i>+99 9787 867589</p>
                            <p className="text-left border-bottom"><i className="far fa-clock icon-style"></i>sat-thu : 08am 07pm</p>
                            <h5 className="text-left" style={{textTransform:"uppercase"}}>follow us on social site</h5>
                            <div className="text-left flex"> 
                                <div className="icon-wrapper"><i className="fab fa-facebook-f icon-border" style={{color:"#3a3737"}}></i></div>
                                <div className="icon-wrapper"><i className="fab fa-twitter icon-border" style={{color:"#3a3737"}}></i></div>
                                <div className="icon-wrapper"><i className="fab fa-pinterest-p icon-border" style={{color:"#3a3737"}}></i></div>
                                <div className="icon-wrapper"><i className="fab fa-linkedin-in icon-border" style={{color:"#3a3737"}}></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;