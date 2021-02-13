import React, {useEffect, useState} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import  GifItem from './GifItem';
const GifGrid = ( { category } ) => {

   const { data:imgs, loading } = useFetchGifs (category);
// {...img} pasa los valore del objeto img
    return (
        <>
        <h2> {category} </h2>
        <div className="card-grid">
        {loading && <p>Loading</p>}
        {
            imgs.map( img => (
                <GifItem key={img.id}
                {...img} />))
        }
        </div>
        </>
    );
}

export default GifGrid;