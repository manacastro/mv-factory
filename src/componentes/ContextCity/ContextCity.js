import React, { useState, useEffect, useContext, createContext } from 'react';

const cityContext = createContext({});

export function CityProvider({ children }) {
  const context = useCityProvider();
  return (
    <cityContext.Provider value={context}>{children}</cityContext.Provider>
  );
}

export const useCity = () => {
  return useContext(cityContext);
};

const useCityProvider = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setCity] = useState("");

  const changeCitySelected = (city) => setCity(city);

  const fetchCities = () =>
    fetch("http://localhost:5000/getcities", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setCities(data.cities));

  useEffect(() => {
    console.log("City has changed");
  }, [selectedCity]);

  useEffect(() => {
    fetchCities();
  }, []);

  return {
    cities,
    selectedCity,
    changeCitySelected,
  };
};