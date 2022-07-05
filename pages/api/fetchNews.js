// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"


const API_KEY = 'l7GzhkMBw38Y95WLopJ4nU9wnqjCRuLi'

export default async function fetchNews(query) {

  // const URL = 'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json'
  const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  // const URL = 'https://api.nytimes.com/svc/topstories/v2/'
  try{
    const {data} = await axios.get(URL ,{
      params: {
        q: query,
        'api-key': API_KEY
      }
    });

    return data;
  }
  catch(error){
    return "can't fetch weather info at the moment"
  }

}

