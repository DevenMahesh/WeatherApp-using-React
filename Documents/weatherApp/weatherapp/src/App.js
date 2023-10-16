import './App.css';
import axios from 'axios'
import { useState } from 'react';


function App() {

  const[data,setData] = useState({})
  const[location, setLocation] = useState('')
  const response='';
  
  const apiKey = '488aa28f22e6c537437d3ac0461cc11a';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;  const searchLocation  = (e) => {

    if(e.key === 'Enter'){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);
      //console.log(data.wind.deg);
    } )
    setLocation('');
  }
  }
  return (
    <div className="app">
      <div className="search">
        <input
         placeholder='Type location name here'
         value={location}
         onKeyPress = {searchLocation}
         onChange = { (e) => setLocation(e.target.value)}
         type='text'
         />
      </div>
     <div className="container">
      <div className="top">

        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          { data.main ? <h1>{data.main.temp} F </h1> : null }
          
        </div>
        <div className="description">
        { data.weather ? <p>{data.weather[0].description}</p> : null }
        </div>
        

        </div>
        <div className="bottom">
          <div className="feels">
            
          { data.main ? <p> Feels Like : {data.main.feels_like}</p> : null }
          </div>
          <div className="humidity">
          { data.main ? <p>{data.main.humidity}</p> : null }
          </div>
          <div className="wind">
          { data.wind ? <p> Degree : {data.wind.deg} Speed : {data.wind.speed} MPH</p> : null }
          </div>
      </div>
     </div>
      
    </div>
  );
}

export default App;
