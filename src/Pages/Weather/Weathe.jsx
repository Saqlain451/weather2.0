import React from 'react'
import './weather.css'
import Card from '../../Componets/Card/Card'
import { useGlobalHook } from '../../Hooks/Context'
const Weathe = () => {

  const {error} = useGlobalHook();

  return (
    <section>
        {console.log(error)}
      {
        error?"Data not found":
        (
        <div className="card-wrapper">
        <Card />
        <div className="card-parents">
        </div>
        </div>
        )
      }
      
    </section>
  )
}

export default Weathe