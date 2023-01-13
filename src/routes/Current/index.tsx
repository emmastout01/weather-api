import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { fetchCurrent } from "../../dataFetching";

const Current = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const { locale = '' } = useParams();

    useEffect(() => {
        // useEffect logic

        const fetchWeather = async () => {
            const currentWeather = await fetchCurrent(locale);
            console.log(currentWeather);
        }
       fetchWeather();

    })

    return (
        <div>Current weather for {locale}</div>
    )
}

export default Current;
