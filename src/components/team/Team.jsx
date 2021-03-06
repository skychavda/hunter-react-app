import React from 'react';
import './team.css';
import Men from '../../men-min.jpg';
import Women from '../../women-min.jpg';
import Person from './Members';
import CounterClient from '../counter/Counter';
import RecentWork from '../recent-work/RecentWork';

class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teamMembers: [
                {photo:Men,name: "shisir irman",designation: "ceo"},
                {photo:Women,name: "sadia afrin",designation: "designer"},
                {photo:Men,name: "john doe",designation: "developer"},
                {photo:Women,name: "afrin sadia",designation: "designer"}
            ]
        }
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
                    <h3 className="capitalize">Team member</h3>
                    <p className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {rows}
                    </div>
                </div>
                <CounterClient/>
                <RecentWork/>
            </div>
        );
    }
}

export default Team;