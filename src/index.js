import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import './index.css';
import './media-query.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(<Header />, document.getElementById('root'));