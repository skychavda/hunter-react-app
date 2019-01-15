import React from 'react';

class PriceList extends React.Component{
    render(){
        const list = this.props.pricelist;
        return(
            <div className="col-md-3 price-category">
                <h4 className="price-title">{list.title}</h4>
                <h6 className="price-amount">{list.price}</h6>
                <div className="detail">
                    <p className="dashed-border-bottom"><i class="fas fa-check"></i>{list.disk}</p>
                    <p className="dashed-border-bottom"><i class="fas fa-check"></i>{list.db}</p>
                    <p className="dashed-border-bottom"><i class="fas fa-check"></i>{list.email}</p>
                    <p className="dashed-border-bottom"><i class="fas fa-check"></i>{list.transfer}</p>
                    <p className="dashed-border-bottom"><i class="fas fa-check"></i>{list.support}</p>
                </div>
                <button className="price-btn">Select Plan</button>
            </div>
        );
    }
}   

export default PriceList;