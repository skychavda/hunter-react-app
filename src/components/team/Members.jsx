import React from 'react';

class Person extends React.Component{
    render(){
        const person = this.props.member;
        return(
            <div className="col-md-3 col-sm-6 col-12 person-border">
                <img className="circle-img" src={person.photo} alt="member"/>
                <h6 className="person-name">{person.name}</h6>
                <p className="person-designation">{person.designation}</p>
                <div className="flex" style={{justifyContent:"center"}}>
                    <div className="icon-wrapper"><i className="fab fa-facebook-f icon-border"></i></div>
                    <div className="icon-wrapper"><i className="fab fa-twitter icon-border"></i></div>
                    <div className="icon-wrapper"><i className="fab fa-pinterest-p icon-border"></i></div>
                </div>
            </div>
        );
    }
}

export default Person;