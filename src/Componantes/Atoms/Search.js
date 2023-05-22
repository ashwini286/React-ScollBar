import React, { useState } from 'react'
import './Search.css'
import {FaSearch} from 'react-icons/fa'
function Search({setResults}) {
    const [input, setInput] = useState(" ");
    const fatchData = ( value ) => {
        fetch('http://cdn-api.co-vin.in/api/v2/admin/location/states')
        .then((response )=> response.json())
        .then((json) => {
            const filteredData = json.states.filter((state) => {
                return( value && 
                state &&
                 state.state_name && 
                 state.state_name.toLowerCase().includes(value.toLowerCase())
                );
            });
            setResults(filteredData)
        });
    };

    const handleChange =(value) => {
        setInput(value)
        fatchData(value)

    }

  return (
    <div>
   
    <FaSearch id='search-icon'/>
    <input 
    type='text'
    placeholder='Type to search' 
    value={input}
    onChange={(e) => handleChange(e.target.value)}
   />
    </div>
  )
}

export default Search
