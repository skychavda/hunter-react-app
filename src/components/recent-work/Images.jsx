import React from 'react';
import Gallery1 from '../../gallery1-min.jpg';
import Gallery2 from '../../gallery2-min.jpg';
import Gallery3 from '../../gallery3-min.jpg';
import Gallery4 from '../../gallery4-min.jpg';
import Gallery5 from '../../gallery5-min.jpg';
import Gallery6 from '../../gallery6-min.jpg';
import Gallery7 from '../../gallery7-min.jpg';
import Gallery8 from '../../gallery8-min.jpg';
import Gallery9 from '../../gallery9-min.jpg';

class Gallery extends React.Component{
    render(){
        let GalleryImage = Gallery9;
        let num = this.props.image;
        if(num==="1") GalleryImage = Gallery1;
        else if(num==="2") GalleryImage = Gallery2;
        else if(num==="3") GalleryImage = Gallery3;
        else if(num==="4") GalleryImage = Gallery4;
        else if(num==="5") GalleryImage = Gallery5;
        else if(num==="6") GalleryImage = Gallery6;
        else if(num==="7") GalleryImage = Gallery7;
        else if(num==="8") GalleryImage = Gallery8;
        else GalleryImage = Gallery9;
        let className = "col-md-4 col-12 join fedIn";
        return(
            <div className={className}>
                <img src={GalleryImage} className="img-fluid" alt="gallery images"/>
            </div>
        );
    }
}

export default Gallery;