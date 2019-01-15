import React from 'react';
import NewsCategory from './NewsCategory';
import News1 from '../../news1.jpg';
import News2 from '../../news2.jpg';
import News3 from '../../news3.jpg';
import './news.css';

class News extends React.Component{
    state = {
        news :[
            {title:"Advance Web-Desing",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News1},
            {title:"Advance Development",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News2},
            {title:"Digital Marketing",disc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi praesentium exercitationem ducimus autem, tenetur cum dignissimos fugiat dolorum neque fuga itaque dolores veritatis",image:News3}
        ]
    };
    render(){
        const newsArr=[];
        this.state.news.forEach((news)=>{
            newsArr.push(
                <NewsCategory news={news}/>
            )
        });
        return(
            <div className="latest-news-wrapper">
                <div className="master-padding">
                    <h3 style={{textAlign: "center"}}>Latest news</h3>
                    <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="row">
                        {newsArr}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;