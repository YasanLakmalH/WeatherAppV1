import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  const fetchWeatherData = async () => { 
    try {
      if (lat !== null && lon !== null) { // Check if lat and lon are defined
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        if (data != null) {
          setWeather(data);
          setCurrentWeatherData(currentWeather);
          
        } else {
          setError("Weather data not available");
        }
      } else {
        setError("Location data not available");
      }
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, weather];
};
