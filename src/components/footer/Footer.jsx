import React from 'react';
import './footer.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="footer-wrapper">
                <div className="master-padding">
                    <div className="row footer-row">
                        <div className="col-md-4 text-left flex">
                            <h2 style={{marginBottom: 0, color:"#117c1e"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2>
                        </div>
                        <div className="col-md-4 text-center flex">
                            <p style={{margin: "auto"}}>&copy;Allright Reseve <span style={{color:"#117c1e"}}>Codehunter</span></p>
                        </div>
                        <div className="col-md-4 text-right flex" style={{justifyContent:"flex-end"}}>
                            <div className="icon-wrapper"><i className="fab fa-facebook-f icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-twitter icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-pinterest-p icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-linkedin-in icon-border"></i></div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;