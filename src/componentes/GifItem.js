import React from 'react';

const GifItem = ({title, id, img}) =>{
    return (
        <div className="card animate__animated animate__bounce">
     <img src={img} title={title} alt="imagen" />
     <p> { title }</p>
     </div>
        )

}

export default GifItem;