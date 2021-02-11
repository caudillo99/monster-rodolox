import React from 'react'
import "./search-box.style.css"
const SearchBox = ({placeholder, handleOnChange}) =>{
   return ( 
      <input className="search" placeholder={placeholder} onChange = {handleOnChange } type="search"/>
   )
}

export default SearchBox;