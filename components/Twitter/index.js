import {react, useEffect} from 'react'
const Twitter = ({
  url
})=>{

  // const url = "https://twitter.com/" + query + "?ref_src=twsrc%5Etfw"

  
  useEffect(()=>{
    
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);


    return () => {
      
              console.log('script', script)

      
    }
    
  }, [url])


  return (
    <div >
      <a className="twitter-timeline" data-theme="dark" href={url}>Loading Tweets...</a> 
      
    </div>
  )
}
export default Twitter;