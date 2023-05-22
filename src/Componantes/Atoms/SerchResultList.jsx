import React from 'react'
import './Search.css'
function SerchResultList({result}) {
  return (
   
       <div className='search_result' onClick={(e) => alert(`you clicked on ${result.state_name}`)}>{result.state_name} </div>
  
  )
}

export default SerchResultList
