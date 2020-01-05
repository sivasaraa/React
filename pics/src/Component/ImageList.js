import React from 'react'
import './ImageList.css'

const ImageList = (props) => {
    const image = props.images.map(({id,urls,description}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });
    return <div className="image-list">{image}</div>;
}

export default ImageList
