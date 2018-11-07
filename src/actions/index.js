import axios from "axios";

const API_KEY  = '7b523fc05f14cca0ececc28d49657d42',
      ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url     = `${ROOT_URL}&q=${city},CO`,
          request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}