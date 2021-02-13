import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

const [state, setstate] = useState({
    data: [],
    loading: true
})

useEffect ( () =>{
    //Obtenemos el resultado del helper que consume la api
    // sobre escribimos state con la funcion setstate
    getGifs(category).
    then(imgs => {
     setstate( {
         data: imgs,
         loading: false
     });

    })
}, []);

// state regresa lo del setstate
return state

}