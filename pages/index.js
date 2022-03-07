import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import fetchWeather from './api/fetchWeather'
import bg from '../assets/img/bg.jpg'
import styles from "./index.module.scss";

export default function Home() {

  const [query, setQuery]= useState('');
  const [weather, setWeather] = useState({})
  const [date, setDate] = useState("")
  const [icon, setIcon] = React.useState("")

  
  const getDate  = () => {
    console.log("getting date");
    const dateObj = new Date();
    weather.description ? setDate(dateObj.toDateString()) : setDate("");
  } 

  const getIcon  = () => {
    console.log("getting icon");
    weather.description ? setIcon(`https://openweathermap.org/img/wn/${weather.icon}@2x.png`) : setIcon("");
  } 

  React.useEffect(()=>{
    getDate();
    getIcon();
  }, [weather])

  const search = async (e) =>{
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      console.log(data)
      data.weather ? setWeather({
          description:  data.weather[0].description,
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          error: "",
          icon: data.weather[0].icon
        },)  : setWeather({
          error: "can't fetch weather infomation check network connection and city name"
        })
      
      
    }
  }

  return (
    <div className={styles.index}>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.imageContainer} >
        <div>
          <Image src={bg} quality={100} layout= "fill"/>
        </div>
      </div>

      <label>Enter a city</label>
      <input type={"text"} className="search" 
        placeholder='search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />


      <div className={styles.weatherCard}>
        
        <div>
          <p className={styles.city}>
            {weather.name}
          </p>

          <p className={styles.country}>{weather.country}</p>
        </div>
        
        <p className={styles.date} style={{
          color: "black"
        }}>
          {date}
        </p>
        <p className={styles.temp} style={{
          display: weather.temp? "flex": "none",
          ...styles
          
        }} >
          {Math.round(weather.temp)  }
          <sup> &deg;C</sup>
          
        </p>

        <img  src={icon} alt=""/>

        
        <p className={styles.description}>
          {weather.description}
        </p>



        <p className={styles.error}>{weather.error}</p>
      
      </div>

    </div>
  )
}
