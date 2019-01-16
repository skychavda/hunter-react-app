import React from 'react';
import './counter.css';

class Counter extends React.Component{
    render(){
        return(
            <div className="counter-wrapper">
                <div className="master-padding">
                    <div className="row text-center">
                        <div className="col-md-3">
                            <div className="timer" data-to="700" data-speed="5000" className="number-font">700</div>
                            <p className="title-font">User</p>
                        </div>
                        <div className="col-md-3">
                            <div className="timer" data-to="700" data-speed="5000" className="number-font">900</div>
                            <p className="title-font">Happy Client</p>
                        </div>
                        <div className="col-md-3">
                            <div className="timer" data-to="700" data-speed="5000" className="number-font">300</div>
                            <p className="title-font">Project Complete</p>
                        </div>
                        <div className="col-md-3">
                            <div className="timer" data-to="700" data-speed="5000" className="number-font">1200</div>
                            <p className="title-font">Coffee with client</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;