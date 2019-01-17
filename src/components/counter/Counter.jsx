import React from 'react';
import './counter.css';
import Counter from 'react-countup';

class CounterClient extends React.Component{
    render(){
        return(
            <div className="counter-wrapper">
                <div className="master-padding">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="number-font"><Counter start={0} end={700} duration={5}/></div>
                            <p className="title-font">User</p>
                        </div>
                        <div className="col-md-3">
                            <div className="number-font"><Counter start={0} end={900} duration={5}/></div>
                            <p className="title-font">Happy Client</p>
                        </div>
                        <div className="col-md-3">
                            <div className="number-font"><Counter start={0} end={300} duration={5}/></div>
                            <p className="title-font">Project Complete</p>
                        </div>
                        <div className="col-md-3">
                            <div className="number-font"><Counter start={0} end={1200} duration={5}/></div>
                            <p className="title-font">Coffee with client</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterClient;