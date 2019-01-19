import React from 'react';
import NewsCategory from './NewsCategory';
import News1 from '../../news1-min.jpg';
import News2 from '../../news2-min.jpg';
import News3 from '../../news3-min.jpg';
import './news.css';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news :[
                {title:"Advance Web-Desing",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News1,month:"Jun",date:"27"},
                {title:"Advance Development",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News2,month:"May",date:"07"},
                {title:"Digital Marketing",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News3,month:"Nov",date:"17"}
            ]
        };
    }
    render(){
        const newsArr=[];
        this.state.news.forEach((news)=>{
            newsArr.push(
                <NewsCategory news={news} key={news.title}/>
            )
        });
        return(
            <div className="latest-news-wrapper" id="blog">
                <div className="master-padding">
                    <h3 style={{textAlign: "center"}} className="capitalize">Latest news</h3>
                    <p style={{textAlign: "center"}} className="sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {newsArr}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;