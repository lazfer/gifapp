import React, {useState} from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ setpers }) => {

const [inputValue, setinputValue] = useState(' ');
const handleInput = (e) => {
    setinputValue(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2 ){
        setpers( category => [inputValue, ...category]);
        setinputValue('');
    }
   
}
    return (
        <form onSubmit={handleSubmit}>
        <input 
        className="input-img"
        type="text"
        value= {inputValue}
        onChange={handleInput}/>
        </form>
    );

}

AddCategory.propTypes = {
    setpers: PropTypes.func.isRequired
}

export default AddCategory;
