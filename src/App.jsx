import React from 'react'
import { useGlobalHook } from './Hooks/Context'
import Weathe from './Pages/Weather/Weathe';
import Search from './Pages/Searchbar/Search'
const App = () => {
  const {dailyData, hourData} = useGlobalHook();
  return (
    <>
      <Search/>
       <Weathe/>
    </>
  )
}

export default App