import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light navigation-wrapper master-padding" style={{color:"#fff"}}>
                <a className="navbar-brand"><h2 style={{marginBottom: 0, color:"#117c1e"}}>H<span style={{fontSize:"20px",color:"#fff",fontWeight:100}}>hunter</span></h2></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color:"white"}}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item header-active">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Testmonial</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;