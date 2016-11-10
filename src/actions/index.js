import { WEATHER_API_KEY } from '../helpers/Variables';
import axios from 'axios';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {

    // if city has spaces, use + sign
    city.replace(' ', '+');

    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}