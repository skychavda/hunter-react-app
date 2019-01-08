import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-wrapper position-relative">
                <div className="master-padding">
                    <div className="text-left" style={{float: "left",color:"#fff"}}>
                        +8801974532 example@gmail.com
                    </div>
                    <div className="text-right" style={{color:"#fff"}}>
                        <ul>
                            <li>
                                <a><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a><i class="fab fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;