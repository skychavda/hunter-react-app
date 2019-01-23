import React from 'react';

class ContactUs extends React.Component{
    render(){
        return(
            <div className="contact-wrapper">
                <div className="master-padding">
                    <div className="text-left" style={{float: "left",color:"rgba(255,255,255,0.62)",fontSize:"13px"}}>
                        +8801974532 example@gmail.com
                    </div>
                    <div className="text-right" style={{color:"#fff",fontSize:"13px"}}>
                        <ul>
                            <li>
                                <a href="JavaScript:void(0);" className="header-icon"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="JavaScript:void(0);" className="header-icon"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="JavaScript:void(0);" className="header-icon"><i className="fab fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href="JavaScript:void(0);" className="header-icon"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;