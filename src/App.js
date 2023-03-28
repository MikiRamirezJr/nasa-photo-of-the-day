import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

function App() {
   const [data, setData] = useState();

   useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
          setData(res.data);
      })
      .catch(err => console.log(err))
      }, [])

    return (
      <div className="App">
        { data && <NasaPhoto photo={data} /> }
      </div>
    );
}

export default App;
/** 
date: "2023-03-25"
explanation: 
"On March 23 early evening skygazers could watch Venus and a young crescent moon, both near the western horizon. On that date Earth's brilliant evening star, faint lunar night side and slender sunlit crescent were captured in this telephoto skyscape posing alongside a church tower from Danta di Cadore, Dolomiti, Italy. Of course the subtle lunar illumination is earthshine, earthlight reflected from the Moon's night side. A description of earthshine, in terms of sunlight reflected by Earth's oceans illuminating the Moon's dark surface, was written over 500 years ago by Leonardo da Vinci. On March 24, from some locations the Moon could be seen to occult or pass in front of Venus. Around the planet tonight, a waxing lunar crescent will appear near the Pleiades star cluster."
hdurl: "https://apod.nasa.gov/apod/image/2303/_GHR3094-venerelunafirma.jpg"
title: "Venus and the Da Vinci Glow"
url: "https://apod.nasa.gov/apod/image/2303/_GHR3094-venerelunafirma800.jpg"
 */