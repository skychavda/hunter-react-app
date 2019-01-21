import React from 'react';
import './footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: window.location.href.split('#')[1]
        }
    }

    handleChange(e,name){
        this.setState({selected:name});
    }
    // onFooterClickChange={(e)=>this.handleChange(e,"home")}
    render(){
        return(
            <footer className="footer-wrapper" id="footer">
                <div className="master-padding">
                    <div className="row footer-row">
                        <div className="col-md-4 footer-div-center text-left flex">
                            <h2 style={{marginBottom: 0, color:"#58f579",fontWeight:"bolder"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2>
                        </div>
                        <div className="col-md-4 text-center flex footer-div-center">
                            <p style={{margin: "auto",color:"#afafaf9c"}}>&copy;Allright Reserve <span style={{color:"#40af57"}}>Codehunter</span></p>
                        </div>
                        <div className="col-md-4 text-right flex footer-div-center" style={{justifyContent:"flex-end"}}>
                            <div className="icon-wrapper"><i className="fab fa-facebook-f icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-twitter icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-pinterest-p icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-linkedin-in icon-border"></i></div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="scroll"><a href="#home" className="floating-icon-a"><i className="fas fa-angle-double-up" style={{transform: "rotate(-45deg)"}}></i></a></button>
                </div>
            </footer>
        );
    }
}

export default Footer;