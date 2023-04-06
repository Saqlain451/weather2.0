import React from 'react'
import './card.css'
import {MdLocationPin} from 'react-icons/md'
import {BsCloudSunFill} from 'react-icons/bs'
import {CiTempHigh} from "react-icons/ci"
import {BiWind} from 'react-icons/bi'
import {GiWaterDrop} from 'react-icons/gi'
import {MdOutlineVisibility} from 'react-icons/md'
import {WiSunrise} from 'react-icons/wi'
import Box from '../box/Box'
const Card = () => {
  return (
    <>
        <div className="card">
            <h4>Weather detailes</h4>
            {/* <div className="card-location">
                <MdLocationPin/> <span>Mumbai</span> 
            </div> */}
            <div className="card-description">
               <span><BsCloudSunFill/></span> 
                <p>Sunny weather</p>
            </div>
            <div className="box-wrapper">
                <Box icon={<CiTempHigh/>} text="Feels like" value="38"/>
                <Box icon={<BiWind/>} text="SSE Wind" value="16"/>
                <Box icon={<GiWaterDrop/>} text="Humidity" value="77"/>
                <Box icon={<MdOutlineVisibility/>} text="Visibility" value="10"/>
                <Box icon={<WiSunrise/>} text="Sunrise" value="05:26"/>
                {/* <Box icon={} text={} value="17:53"/> */}
            </div>
        </div>
    </>
  )
}

export default Card