import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import Counter from './components/counter/Counter';
import ClientReview from './components/client-review/ClientReview';
import News from './components/latest-news/News';
import Price from './components/price/Price';
import 'bootstrap/dist/css/bootstrap.css';
import RecentWork from './components/recent-work/RecentWork';
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <div>
    <Header />
    <About/>
    <Services/>
    <Team />
    <Counter />
    <RecentWork />
    <ClientReview />
    <News />
    <Price/>
    </div>
    , document.getElementById('root'));