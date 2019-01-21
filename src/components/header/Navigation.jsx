import React from 'react';

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {
            scrollclass: 'sticky-nav-blur',
            color: 'rgba(82, 86, 89, 0.7)'
        };
    }


    listenScrollEvent = e => {
        if (window.pageYOffset > 10) {
          this.setState({scrollclass: 'sticky-nav'})
        } else {
          this.setState({scrollclass: 'sticky-nav-blur'})
        }
      }
    
    componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    }

    render(){
        let selected = window.location.href.split('/')[4];
        if(selected===""){
        return(
            <div className={"navbar navbar-expand-lg custome-toggler navbar-light navigation-wrapper master-padding "+this.state.scrollclass}>
                <a className="navbar-brand"><h2 style={{marginBottom: 0, color:"#58f579",fontWeight:"bolder"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2></a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"#117c1e"}}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected===""?"header-active" : "")} href="#home" >Home</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#about"?"header-active" : "")} href="#about" >About</a></button>
                        </li> 
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#service"?"header-active" : "")} href="#service" >Service</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#team"?"header-active" : "")} href="#team" >Team</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#testimonial"?"header-active" : "")} href="#testimonial" >Testimonial</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#blog"?"header-active" : "")} href="#blog" >Blog</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+(selected==="#contact"?"header-active" : " ")} href="#contact">Contact</a></button>
                        </li>
                    </ul>
                </div>
            </div>
            
        );}
        else{
            return(
                <div className={"navbar navbar-expand-lg custome-toggler navbar-light navigation-wrapper master-padding "+this.state.scrollclass}>
                    <a className="navbar-brand"><h2 style={{marginBottom: 0, color:"#58f579",fontWeight:"bolder"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2></a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"#117c1e"}}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#home"?"header-active" : "")} href="#home" >Home</a></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#about"?"header-active" : "")} href="#about" >About</a></button>
                            </li> 
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#service"?"header-active" : "")} href="#service" >Service</a></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#team"?"header-active" : "")} href="#team" >Team</a></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#testimonial"?"header-active" : "")} href="#testimonial" >Testimonial</a></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="#blog"?"header-active" : "")} href="#blog" >Blog</a></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link nav-btn"><a className={"header-a "+(selected==="#contact"?"header-active" : " ")} href="#contact">Contact</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            );
        }
    }
}

export default Navigation;