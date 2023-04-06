import React from 'react'
import "./box.css"
const Box = ({icon, text, value}) => {
  return (
    <>
        <div className="box">
            <span className='box-icon'>
                {icon}
            </span>
            <p>{text}</p>
            <h6>{value}</h6>
        </div>
    </>
  )
}

export default Box