import axios from 'axios';
const API_KEY = '787bea0ef62e436d35c4f778bd74ad21';

export const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
