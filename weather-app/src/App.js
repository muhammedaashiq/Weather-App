import React,{useState} from 'react';
import './App.css';

function App() {
  
  const [city,setCity] = useState('Republic of India')
  const [check,setCheck] = useState()
  const [name,setName] = useState()
  const [icon,setIcon] = useState()
  const [description,setDescription] = useState()
  const [temp,setTemp] = useState()
  const [humidity,setHumidity] = useState()
  const [wind,setWind] = useState()

  const apiKey = "392d1b58a2e2e92fbf0ee16a30ef7a23"
  
  function fetchWeather(city){
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      ).then((response) => response.json())
          .then((data) => displayWeather(data))
  }

  function displayWeather(response){
    let name = response.name
    let temp = response.main.temp
    let weather = response.weather[0]
    let icondata = weather.icon
    let humiditydata = response.main.humidity
    let descriptiondata = weather.description
    let winddata = response.wind.speed
    setName(name)
    setTemp(temp)
    setIcon(icondata)
    setHumidity(humiditydata)
    setDescription(descriptiondata)
    setWind(winddata)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    setCity(check)
  }
  
  fetchWeather(city)

  return (
    <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="search" id="search">
              <input type="text" onChange={(e)=>setCheck(e.target.value)} className="search-bar" placeholder="Search" />
              <button type='submit' id="button">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em"
                      width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                      </path>
                  </svg>
              </button>
          </div>
        </form>
        <div>
            <h2 className="city">Weather in {name}</h2>
            <h1 className="temp">{temp}°C</h1>
            <div className="flex">
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""/>
                <div className="description">{description}</div>
            </div>
            <div className="humidity">Humidity: {humidity}%</div>
            <div className="wind">Wind Speed: {wind}km/h</div>
        </div>
    </div>
  );
}

export default App;
