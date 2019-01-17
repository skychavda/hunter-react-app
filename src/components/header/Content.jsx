import React from 'react';

class Content extends React.Component{
    render(){
        return(
            <div className="master-padding text-center padding" style={{color:"#fff"}}>
                <div className="h1">Welcome to Hunter Agency</div>
                <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Assumenda sed unde id incidunt eius sunt ex modi voluptate doloremque.</p>
                <button className="header-btn">About us</button>
                <button className="header-btn">Contact Us</button>
            </div>
        );
    }
}

export default Content;