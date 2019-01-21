import React from 'react';
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

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
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
        );
    }
}

export default App;