import React from 'react';

class Gallery extends React.Component{
    constructor(){
        super();
        this.state={
            selected:"all"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(prop){
        this.setState({selected: prop})
    }
    render(){
        const selected = this.state.selected;
        const className = this.state.clicked ? 'gallery-menu active' : 'gallery-menu' ;
        return(
            <div className="gallery">
                <div className="row justify-content-center">
                    <ul style={{padding: 0}}>
                        <li className={selected==="all"? "gallery-menu active":"gallery-menu"} onClick={()=> this.handleClick("all")}><a>All</a></li>
                        <li className={selected==="design"? "gallery-menu active":"gallery-menu"} onClick={()=> this.handleClick("design")}>Design</li>
                        <li className={selected==="development"? "gallery-menu active":"gallery-menu"} onClick={()=> this.handleClick("development")}>Development</li>
                        <li className={selected==="photo"? "gallery-menu active":"gallery-menu"} onClick={()=> this.handleClick("photo")}>Photography</li>
                        <li className={selected==="anim"? "gallery-menu active":"gallery-menu"} onClick={()=> this.handleClick("anim")}>Animation</li>
                    </ul>
                </div> 
                <div className="gallery-image padding-top">
                    <div className="row">
                        <div className={selected==="all"?"col-md-4 col-12 join" : "col-md-4 col-12 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                    </div>
                    <div className="row">
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                    </div>
                    <div className="row">
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                        <div className={selected==="all"?"col-md-4 join" : "col-md-4 join none"}><img src={require("../../header.jpg")} className="img-fluid"/></div>
                    </div>
                </div>     
            </div>
        );
    }
}

export default Gallery;