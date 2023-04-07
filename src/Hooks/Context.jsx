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

    const [cityId, setCityId] = useState("");
    const [subcity, setSubCity] = useState("Mumbai");
    const [curData, setCurData] = useState({})
    const [dailyData, setDailyData] = useState([]);
    const [hourData, setHourData] = useState([])
    const [error, setError] = useState(false);

    const changeHandler = (e) => {
        setCityId(e.target.value);
    }

    const clickHandler = () => {
        setSubCity(cityId);
        setCityId("");
    }


    const getWeatherData = async (api) => {
        try {
            const res = await fetch(api, options);
            const data = await res.json();
            console.log(data.forecast[0]);
            const { symbolPhrase, maxFeelsLikeTemp, maxTemp, maxRelHumidity, maxWindSpeed, minVisibility, sunrise, sunset } = data.forecast[0]
            const datas = { symbolPhrase, maxFeelsLikeTemp, maxTemp, maxRelHumidity, maxWindSpeed, minVisibility, sunrise, sunset }
            setCurData({ ...datas })
            console.log(symbolPhrase)
            setDailyData(data.forecast)
        } catch (err) {
            console.log(err)
        }

    }

    const getHourlyData = async (api) => {
        const res = await fetch(api, options);
        const data = await res.json();
        // console.log(data.forecast);
        setHourData(data.forecast);
    }

    const getCityId = async (api) => {
        const res = await fetch(api, options);
        const data = await res.json();
        setError(false);
        try {
            getWeatherData(`${url}/daily/${data.locations[0].id}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`)
            getHourlyData(`${url}/3hourly/${data.locations[0].id}?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&periods=8&dataset=full&history=0`)

        } catch (err) {
            console.error(err)
            setError(true);
        }

    }



    useEffect(() => {
        getCityId(`https://foreca-weather.p.rapidapi.com/location/search/${subcity}?lang=en&country=in`)
    }, [subcity])


    return (<appContext.Provider value={{ dailyData, hourData, changeHandler, cityId, subcity, clickHandler, curData,error }}>
        {children}
    </appContext.Provider>)
}

const useGlobalHook = () => useContext(appContext);
export { AppProvider, useGlobalHook };