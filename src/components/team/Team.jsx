import React from 'react';
import './team.css';
import Men from '../../men.jpg';
import Women from '../../women.jpeg';
import Person from './Members';

class Team extends React.Component{
    state = {
        teamMembers: [
            {photo:Men,name: "shisir irman",designation: "ceo"},
            {photo:Women,name: "sadia afrin",designation: "designer"},
            {photo:Men,name: "john doe",designation: "developer"},
            {photo:Women,name: "afrin sadia",designation: "designer"}
        ]
    }
    render(){
        const rows = [];
        this.state.teamMembers.forEach((member)=>{
            rows.push(
                <Person member={member} key={member.name}/>
            );
        });
        return(
            <div className="team-wrapper" id="team">
                <div className="master-padding text-center">
                    <h3>Team member</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {rows}
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;