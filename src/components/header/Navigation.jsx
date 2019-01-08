import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navigation-wrapper master-padding" style={{color:"#fff"}}>
                <a className="navbar-brand">Hunter</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
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