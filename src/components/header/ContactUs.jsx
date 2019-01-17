import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-wrapper">
                <div className="master-padding">
                    <div className="text-left" style={{float: "left",color:"#fff",fontSize:"13px"}}>
                        +8801974532 example@gmail.com
                    </div>
                    <div className="text-right" style={{color:"#fff",fontSize:"13px"}}>
                        <ul>
                            <li>
                                <a><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;