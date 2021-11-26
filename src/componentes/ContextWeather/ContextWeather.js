import React, { useState, useEffect, useContext, createContext } from 'react';

const weatherContext = createContext({});

export function WeatherProvider({ children }) {
    const context = useWeatherProvider();
    return (
        <weatherContext.Provider value={context}>{children}</weatherContext.Provider>
    );
}

export const useWeather = () => {
    return useContext(weatherContext);
};

const useWeatherProvider = () => {
    const [weather, setWeather] = useState({});
    const [selectedCityHistory, setCityHistory] = useState("");

    const changeWeather = (selectedCity, selectedHistory) => setCityHistory(selectedCity, selectedHistory);

    const fetchWeather = (selectedCity, selectedHistory) =>
        fetch("http://localhost:5000/getweather/"+ selectedCity + "/"  + selectedHistory , {
            mode: "cors"
        })
        .then((response) => response.json())
        .then((data) => setWeather(data));

        useEffect(() => {
            console.log("Weather has changed");
        }, [selectedCityHistory]);

        useEffect(() => {
            fetchWeather();
        }, []);

        return {
            weather,
            selectedCityHistory,
            changeWeather
        };
}