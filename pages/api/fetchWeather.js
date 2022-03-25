// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '670763202e5a156f0432a7d74336c489'

export default async function fetchWeather(query) {
  try{
    console.log("fetching data")
    const {data} = await axios.get(URL,{
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY
      }
    });

    return data;
  }
  catch(error){
    console.log("errorrr: " + error)
    return "can't fetch weather info at the moment"
  }

}

