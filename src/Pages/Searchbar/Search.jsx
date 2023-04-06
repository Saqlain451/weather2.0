import React from 'react'
import './Search.css'
import {FiSearch} from 'react-icons/fi'
import {useGlobalHook} from '../../Hooks/Context'
const Search = () => {
  const {changeHandler,cityId,clickHandler} = useGlobalHook();
  return (
    <section>
      <div className="search-bar">
        <input type="text" placeholder='Enter your city:' value={cityId} onChange= {changeHandler} />
        <button onClick = {clickHandler} > <FiSearch/> </button>
      </div>
    </section>
  )
}

export default Search