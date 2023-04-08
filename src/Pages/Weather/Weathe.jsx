import React from 'react'
import './weather.css'
import Card from '../../Componets/Card/Card'
import { useGlobalHook } from '../../Hooks/Context'
import Loader from '../../Componets/Loader/Loader'
import Box from '../../Componets/box/Box'
const Weathe = () => {

  const { error, isLoading, dailyData,hourData } = useGlobalHook();
  const dateToDayName = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDay();
    let dayName = "";
    switch (day) {
      case 0: dayName = "Sun day";
        break;
      case 1: dayName = "Mon day";
        break;
      case 2: dayName = "Tuse day";
        break;
      case 3: dayName = "wednes day";
        break;
      case 4: dayName = "Thurse day";
        break;
      case 5: dayName = "Fri day";
        break;
      case 6: dayName = "sature day";
        break;
      default: dayName = " ";
    }
    return dayName;
  }

  const getHour = (time)=>{
    var date = new Date(time);
    return date.toLocaleTimeString()
  }

  return (
    <section>
      {isLoading ? (<Loader />) : (
        error ? "Data not found" :
          (
            <div className="card-wrapper">
              <Card />
              <div className="card-parents">
                <div className="forecast">
                <h5>Daily forecaste</h5>
                  <div className="forecast-details">
                    
                  {dailyData.map((ele) => {
                    const { symbolPhrase, maxTemp, minTemp, date,symbol,} = ele;
                    return (
                      <Box dayname={dateToDayName(date)}  text={symbolPhrase} value={`${maxTemp}/${minTemp}`} key={date
                      }/>
                    )
                  })}
                  </div>
                </div>
                <div className="forecast">
                <h5>hourly forecaste</h5>
                  <div className="forecast-details">
                {hourData.map((ele) => {
                    // console.log(ele)
                    const{feelsLikeTemp,time,} = ele;
                    return(
                      <Box dayname={getHour(time) } value={`${feelsLikeTemp} °C`} key={time} />
                    )
                  })}
                  </div>
                </div>
              </div>
            </div>
          )
      )

      }

    </section>
  )
}

export default Weathe