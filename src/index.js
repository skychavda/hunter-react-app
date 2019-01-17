import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media-query.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Team from './components/team/Team';
import CounterClient from './components/counter/Counter';
import ClientReview from './components/client-review/ClientReview';
import RecentWork from './components/recent-work/RecentWork';
import News from './components/latest-news/News';
import Price from './components/price/Price';
import Contact from './components/contact-us/Contact';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <div>
    <Header />
    <About/>
    <Services/>
    <Team />
    <CounterClient />
    <RecentWork />
    <ClientReview />
    <News />
    <Price/>
    <Contact />
    <Footer />
    </div>
    , document.getElementById('root'));