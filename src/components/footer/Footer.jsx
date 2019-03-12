import React from 'react';
import './footer.css';
import { Link } from 'react-scroll';

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
                            <p style={{margin: "auto",color:"#afafaf9c"}}>&copy;2019 Allright Reserve <span style={{color:"#40af57"}}>WebCube Technologies</span></p>
                        </div>
                        <div className="col-md-4 text-right flex footer-div-center" style={{justifyContent:"flex-end"}}>
                            <div className="icon-wrapper"><i className="fab fa-facebook-f icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-twitter icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-pinterest icon-border"></i></div>
                            <div className="icon-wrapper"><i className="fab fa-linkedin icon-border"></i></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="scroll">
                        <Link to="home" spy={true} smooth={true} duration={100} className="floating-icon-a">
                            <i className="fas fa-angle-double-up" style={{transform: "rotate(-45deg)"}}></i>
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;