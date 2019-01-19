import React from 'react';
import './header.css';
import ContactUs from './ContactUs';
import Navigation from './Navigation';
import Content from './Content';
import About from '../about/About';
import Services from '../services/Services';
import Team from '../team/Team';
import CounterClient from '../counter/Counter';
import ClientReview from '../client-review/ClientReview';
import RecentWork from '../recent-work/RecentWork';
import News from '../latest-news/News';
import Price from '../price/Price';
import Contact from '../contact-us/Contact';
import Footer from '../footer/Footer';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header-img" id="home">
                    <ContactUs/>
                    <Navigation/>
                    <Content />
                    <div>
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
                </header>
                
            </div>
        );
    }
}

export default Header;