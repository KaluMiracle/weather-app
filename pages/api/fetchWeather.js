// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

// const URL = 'https://api.openweathermap.org/data/2.5/weather'
const URL = 'http://localhost/products_api/api/products'
const API_KEY = '670763202e5a156f0432a7d74336c489'

// export default async function fetchWeather(query) {
//   try{
//     console.log("fetching data")
//     const {data} = await axios.get(URL,{
//       params: {
//         q: query,
//         units: "metric",
//         APPID: API_KEY
//       }
//     });

//     return data;
//   }
//   catch(error){
//     console.log("errorrr: " + error)
//     return "can't fetch weather info at the moment"
//   }

// }


const queryl = {
  sku:"f99dd00Jj",
  category_id: "book",
  name: "bbb",
  price:34555,
  details: "5550kg",
}
export default async function fetchWeather(query) {
  try{
    console.log("fetching data")
    const {data} = await axios.post(URL, queryl);

    return data;
  }
  catch(error){
    console.log("errorrr: " + error)
    return "can't fetch weather info at the moment"
  }

}

// export default async function fetchWeather(query) {
//   try{
//     console.log("fetching data")
//     const {data} = await axios.get(URL);

//     return data;
//   }
//   catch(error){
//     console.log("errorrr: " + error)
//     return "can't fetch weather info at the moment"
//   }

// }



