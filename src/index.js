import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Counter from './components/counter/Counter';
import ClientReview from './components/client-review/ClientReview';
import 'bootstrap/dist/css/bootstrap.css';
import RecentWork from './components/recent-work/RecentWork';

ReactDOM.render(
    <div>
    <Header />
    <About/>
    <Services/>
    <Team />
    <Counter />
    <RecentWork />
    <ClientReview />
    </div>
    , document.getElementById('root'));