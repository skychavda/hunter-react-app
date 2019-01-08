import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <div>
    <Header />
    <About/>
    <Services/>
    <Team />
    </div>
    , document.getElementById('root'));