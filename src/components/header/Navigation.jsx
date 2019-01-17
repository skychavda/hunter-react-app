import React from 'react';

class Navigation extends React.Component{
    constructor(){
        super();
        this.state = {selected:'home'};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({selected: e.target.value});
    }

    render(){
        let selected = this.state.selected;
        return(
            <nav className="navbar navbar-expand-lg custome-toggler navbar-light navigation-wrapper master-padding">
                <a className="navbar-brand"><h2 style={{marginBottom: 0, color:"#58f579",fontWeight:"bolder"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2></a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"#117c1e"}}>
                <i class="fas fa-bars"></i>
                    {/* <div style={{borderBottom:"1px solid #117c1e"}}></div>
                    <hr/> */}
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <button className={"nav-link nav-btn "+(selected==="home"?"header-active" : " ")} onClick={this.handleChange} value="home">Home</button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="about"?"header-active" : " ")} onClick={this.handleChange} value="about">About</button>
                        </li> 
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="service"?"header-active" : " ")} onClick={this.handleChange} value="service">Service</button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="team"?"header-active" : " ")} onClick={this.handleChange} value="team">Team</button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="testmonial"?"header-active" : " ")} onClick={this.handleChange} value="testmonial">Testmonial</button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="blog"?"header-active" : " ")} onClick={this.handleChange} value="blog">Blog</button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link nav-btn "+(selected==="contact"?"header-active" : " ")} onClick={this.handleChange} value="contact">Contact</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;