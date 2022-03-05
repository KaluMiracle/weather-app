import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import fetchWeather from './api/fetchWeather'
import bg from '../assets/img/bg.jpg'
import styles from "./index.module.scss";
import { useEffect } from 'react/cjs/react.production.min'

export default function Home() {

  const [query, setQuery]= useState('');
  const [weather, setWeather] = useState({weather: "",cityInfoc: '',cityInfoMain: ''})
 

  const search = async (e) =>{
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      console.log(data)
      if (data.weather){
        setWeather({
          description:  data.weather[0].description,
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          error: "",
        },)  
      }else{
        setWeather({error: "can't fetch weather infomation check network connection and city name"})
      }
      
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
        <h2 className={styles.cityInfo}>
          {weather.name}
          
        </h2>
        <p>{weather.country}</p>
        <h2 className={styles.temp}>
          {weather.temp}
          
        </h2>

        
        <h2 className={styles.description}>
          {weather.description}
          
        </h2>

        <h2 className={styles.error}>{weather.error}</h2>
      
      </div>

    </div>
  )
}
