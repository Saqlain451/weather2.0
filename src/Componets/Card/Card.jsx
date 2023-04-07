import React, { useEffect, useState } from 'react'
import './card.css'
import { MdLocationPin } from 'react-icons/md'
import { BsCloudSunFill } from 'react-icons/bs'
import { CiTempHigh } from "react-icons/ci"
import { BiWind } from 'react-icons/bi'
import { GiWaterDrop } from 'react-icons/gi'
import { MdOutlineVisibility } from 'react-icons/md'
import { TbSunrise, TbSunset2 } from 'react-icons/tb'
import Box from '../box/Box'
import { useGlobalHook } from '../../Hooks/Context'
const Card = () => {
    const { curData } = useGlobalHook();
    return (
        <>
            <div className="card">
                <h4>Weather Details</h4>
                <div className="card-description">
                    <span><BsCloudSunFill /></span>
                    <div className="des">
                        <p>
                            {`${curData.maxTemp} °C`}
                        </p>
                        <span>
                            {curData.symbolPhrase} </span>
                    </div>

                </div>
                <div className="box-wrapper">
                    <Box icon={<CiTempHigh />} text="Feels like" value={`${curData.maxFeelsLikeTemp} °C`} />
                    <Box icon={<BiWind />} text="SSE Wind" value={`${curData.maxWindSpeed} km/h`} />
                    <Box icon={<GiWaterDrop />} text="Humidity" value={`${curData.maxRelHumidity} %`} />
                    <Box icon={<MdOutlineVisibility />} text="Visibility" value={`${curData.minVisibility}`} />
                    <Box icon={<TbSunrise />} text="Sunrise" value={`${curData.sunrise} AM`} />
                    <Box icon={<TbSunset2 />} text="Sun set" value={`${curData.sunset} PM`} />
                </div>
            </div>
        </>
    )
}

export default Card