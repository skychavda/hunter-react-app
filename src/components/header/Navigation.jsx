import React from 'react';

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {selected:'home'};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e,name){
        this.setState({selected: name});
        // e.preventDefault();
        // return true;
    }

    render(){
        let selected = this.state.selected;
        return(
            <div className="navbar sticky-top navbar-expand-lg custome-toggler navbar-light navigation-wrapper master-padding">
                <a className="navbar-brand"><h2 style={{marginBottom: 0, color:"#58f579",fontWeight:"bolder"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2></a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"#117c1e"}}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="home"?"header-active" : "")} href="#home" onClick={(e)=>this.handleChange(e,"home")}>Home</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="about"?"header-active" : "")} href="#about" onClick={(e)=>this.handleChange(e,"about")}>About</a></button>
                        </li> 
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="service"?"header-active" : "")} href="#service" onClick={(e)=>this.handleChange(e,"service")}>Service</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="team"?"header-active" : "")} href="#team" onClick={(e)=>this.handleChange(e,"team")}>Team</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="testimonial"?"header-active" : "")} href="#testimonial" onClick={(e)=>this.handleChange(e,"testimonial")}>Testimonial</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+ (selected==="blog"?"header-active" : "")} href="#blog" onClick={(e)=>this.handleChange(e,"blog")}>Blog</a></button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link nav-btn"><a className={"header-a "+(selected==="contact"?"header-active" : " ")} onClick={(e)=>this.handleChange(e,"contact")} href="#contact">Contact</a></button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;