import React from 'react';
import './header.css';
import Contact from './ContactUs';
import Navigation from './Navigation';
import Content from './Content';

class Header extends React.Component{
    render(){
        return(
            <header className="header-img">
                <Contact/>
                <Navigation/>
                <Content />
            </header>
        );
    }
}

export default Header;