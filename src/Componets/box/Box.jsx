import React from 'react'
import "./box.css"
const Box = ({icon, text, value,dayname,icon2}) => {
  return (
    <>
        <div className="box">
            <strong>{dayname}</strong>
            <br />
            <span className='box-icon'>{icon}
            </span>
            <p>{text}</p>
            <h6>{value}</h6>
        </div>
    </>
  )
}

export default Box