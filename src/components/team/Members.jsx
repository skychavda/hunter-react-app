import React from 'react';

class Person extends React.Component{
    render(){
        const person = this.props.member;
        return(
            <div className="col-md-3 col-12 person-border">
                <img className="circle-img" src={person.photo}/>
                <h6 className="person-name">{person.name}</h6>
                <p className="person-designation">{person.designation}</p>
                {/* <i><FontAwesomeIcon icon={person.facebook}/></i> */}
                {/* <i><FontAwesomeIcon icon={person.twitter}/></i> */}
                <i class="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i class="fab fa-pinterest-p"></i>
            </div>
        );
    }
}

export default Person;