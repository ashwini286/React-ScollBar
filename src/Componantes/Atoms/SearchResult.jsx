import React from 'react'
import './Search.css'
import SerchResultList from './SerchResultList'
function SearchResult({results}) {
  return (
    <div className='Result-list'>
   {
    results.map((result,id) => {
        return(
            <SerchResultList result={result} key={id}  />
        )
    })
   }
    </div>
  )
}

export default SearchResult
