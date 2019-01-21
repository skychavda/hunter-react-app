import React from 'react';
import './header.css';
import ContactUs from './ContactUs';
import Navigation from './Navigation';
import Content from './Content';


class Header extends React.Component{
    render(){
        return(
            <div>
                <header className="header-img" id="home">
                    <ContactUs/>
                    <Navigation/>
                    <Content />
                </header>
                
            </div>
        );
    }
}

export default Header;