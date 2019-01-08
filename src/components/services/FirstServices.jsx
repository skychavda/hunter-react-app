import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class FirstServices extends React.Component{
    render(){
        const service = this.props.serivce;
       return(
            <div className="col-md-4 col-12 padding-top text-left">
                <i className={service.icon}></i>
                <h6 style={{textTransform: "uppercase"}}>{service.name}</h6>
                <p style={{textTransform: "capitalize"}}>{service.content}</p>
            </div>
        );
    }
}

export default FirstServices;