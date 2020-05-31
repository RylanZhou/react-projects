import axios from 'axios'

const API_KEY = 'b30d675fb6d8f083652b1320d18ec6b3'
const API_BASE = 'http://api.openweathermap.org/data/2.5/weather'

export const fetchWeather = async (query) => {
  const { data } = await axios.get(API_BASE, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY
    }
  })

  return data
}
