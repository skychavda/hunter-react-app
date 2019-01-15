import React from 'react';
import './price.css';
import PriceList from './PriceList';

class Price extends React.Component{
    state = {
        pricelist: [
            {title:"basic",price:"$10 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"standard",price:"$50 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"gold",price:"$70 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"},
            {title:"primium",price:"$99 / permonth", disk:"5GB Linux Web Space", db:"5 MySQL Databases", email:"Unlimited Email", transfer:"250Gb Transfer", support:"24/7 Tech Support"}
        ]
    }

    render(){
        const pricelist = [];
        this.state.pricelist.forEach((list)=>{
            pricelist.push(
                <PriceList pricelist={list}/>
            );
        });
        return(
            <div className="price-wrapper">
                <div className="master-padding text-center">
                    <h3>Service price</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {pricelist}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Price;