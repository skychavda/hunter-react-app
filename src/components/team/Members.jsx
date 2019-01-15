import React from 'react';

class Person extends React.Component{
    render(){
        const person = this.props.member;
        return(
            <div className="col-md-3 col-12 person-border">
                <img className="circle-img" src={person.photo}/>
                <h6 className="person-name">{person.name}</h6>
                <p className="person-designation">{person.designation}</p>
                <i class="fab fa-facebook-f icon-border"></i>
                <i className="fab fa-twitter icon-border"></i>
                <i class="fab fa-pinterest-p icon-border"></i>
            </div>
        );
    }
}

export default Person;