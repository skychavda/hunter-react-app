import React from 'react';
import Images from './Images';

class Gallery extends React.Component{
    constructor(){
        super();
        this.state={
            selected:'all'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        filterImage = [];
        filterImage1 = [];
        filterImage2 = [];
        filterImage3 = [];
        this.setState({selected: e.target.value})
    }
    render(){
        const selected = this.state.selected;
        
        if(selected==="all"){
            IMAGES.forEach((imageList)=>{
                filterImage.push(
                    <Images image = {imageList.image} key={imageList.image}/>
                );
            });
        }else{
            filterImage = [];
            IMAGES.forEach((imageList)=>{
                if(imageList.category.indexOf(selected)===-1){
                    return;
                }
                filterImage.push(
                    <Images image = {imageList.image} key={imageList.image}/>
                );
            })
        }

        for(var i=0;i<filterImage.length;i++){
            if((i+3)%3===0){
                filterImage3.push(filterImage[i]);
            }else if((i+2)%2===0){
                filterImage2.push(filterImage[i]);
            }else{
                filterImage1.push(filterImage[i]);
            }
        }

        if(filterImage2<filterImage3){
            filterTemp = filterImage3;
            filterImage3 = filterImage2;
            filterImage2 = filterTemp;
        }

        if(filterImage1 < filterImage2){
            filterTemp = filterImage2;
            filterImage2 = filterImage1;
            filterImage1 = filterTemp;
        }
        return(
            <div className="gallery">
                <div className="row justify-content-center">
                    <ul style={{padding: 0}}>
                        <li><button className={"gallery-menu " + (selected==="all" ? "active":"")} onClick={this.handleClick} value="all">All</button></li>
                        <li><button className={"gallery-menu " + (selected==="design" ? "active":"")} onClick={this.handleClick} value="design">Design</button></li>
                        <li><button className={"gallery-menu " + (selected==="development" ? "active":"")} onClick={this.handleClick} value="development">Development</button></li>
                        <li><button className={"gallery-menu " + (selected==="photo" ? "active":"")} onClick={this.handleClick} value="photo">Photography</button></li>
                        <li><button className={"gallery-menu " + (selected==="anim" ? "active":"")} onClick={this.handleClick} value="anim">Animation</button></li>
                    </ul>
                </div> 
                <div className="gallery-image padding-top">
                    <div className="row fedIn">
                        {filterImage1}
                        {filterImage2}
                        {filterImage3}
                    </div>
                </div>     
            </div>
        );
    }
}

let filterImage = [];
let filterImage1 = [];
let filterImage2 = [];
let filterImage3 = [];
let filterTemp = [];
const IMAGES = [
    {category:'design',image: '1'},
    {category:'development',image: '2'},
    {category:'photo',image: '3'},
    {category:'anim',image: '4'},
    {category:'design',image: '5'},
    {category:'development',image: '6'},
    {category:'photo',image: '7'},
    {category:'anim',image: '8'},
    {category:'design',image: '9'}
];
export default Gallery;