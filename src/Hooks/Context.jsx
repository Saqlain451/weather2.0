import React, { useContext, useEffect, useState } from 'react'

const appContext = React.createContext();

const AppProvider = ({ children }) => {


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '388b0e83cemsh1596acda609c0f0p17852cjsn33fcb32843b3',
            'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
        }
    };
    const url = "https://foreca-weather.p.rapidapi.com/forecast";

    const [cityId, setCityId] = useState("Mumbai");
    const [subcity, setSubCity] = useState("");
    const [dailyData, setDailyData] = useState([]);
    const [hourData, setHourData] = useState([])

    const changeHandler = (e)=>{
        setCityId(e.target.value);
    }

    const clickHandler = ()=>{
        setSubCity(cityId);
    }


    const getWeatherData = async (api) => {
        const res = await fetch(api, options);
        const data = await res.json();
        console.log(data.forecast);
        setDailyData(data.forecast)
    }

    const getHourlyData = async (api) => {
        const res = await fetch(api, options);
        const data = await res.json();
        console.log(data.forecast);
        setHourData(data.forecast);
    }

    const getCityId = async (api) => {
        const res = await fetch(api, options);
        const data = await res.json();
        console.log(data.locations[0].id);
        getWeatherData(`${url}/daily/${data.locations[0].id}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`)
        getHourlyData(`${url}/3hourly/${data.locations[0].id}?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&periods=8&dataset=full&history=0`)
    }



    useEffect(() => {
        getCityId(`https://foreca-weather.p.rapidapi.com/location/search/${cityId}?lang=en&country=in`)
    }, [subcity])


    return (<appContext.Provider value={{ dailyData,hourData,changeHandler,cityId,subcity, clickHandler}}>
        {children}
    </appContext.Provider>)
}

const useGlobalHook = () => useContext(appContext);
export { AppProvider, useGlobalHook };