
import React, {useState} from 'react';
import AddCategory from './componentes/AddCategory';
import GifGrid from './componentes/GifGrid';
const GifExpertApp = () => {
    const arrPersonaje = ['Goku'];
    const [pers, setpers] = useState(arrPersonaje)
   
    /* const handleAdd = () => {
         setpers(persona => [...persona, 'doremon']);
    }*/


    return (
        <div>
        <h2> Gif Expert App </h2>
    {/*  <button onClick={handleAdd}> Agregar </button> */}
    <AddCategory setpers={setpers}/>
        <ol>
        {
          pers.map( (category) => {
       return  <GifGrid key={category} category={category}/>
          })
        }
        </ol>
        </div>
        )
}

export default GifExpertApp;