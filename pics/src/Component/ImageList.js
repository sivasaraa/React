import React from 'react'

const ImageList = (props) => {
    const image = props.images.map(({id,urls,description}) => {
        return <img key={id} src={urls.regular} alt={description}/>
    });
    return <div>{image}</div>;
}

export default ImageList
