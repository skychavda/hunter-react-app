import React from 'react';

class NewsCategory extends React.Component{
    render(){
        const news = this.props.news;
        return(
            <div className="col-md-4">
                <div className="card">
                    <img className="card-img-top" src={news.image} />
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">{news.disc}</p>
                        <i className="far fa-eye">900</i>
                        <i className="far fa-thumbs-up" style={{paddingLeft: "10px"}}>700</i>
                    </div>
                    <div>
                        <button className="float-right read-more-btn">Read More<i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCategory;