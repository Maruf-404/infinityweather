/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */

import { useState } from "react";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const Url = "https://api.openweathermap.org/data/2.5/weather";
  const ApiKey = import.meta.env.VITE_API_KEY;
  const getWeather = async () => {
    try {
      let response = await fetch(
        `${Url}?q=${city}&appid=${ApiKey}&units=metric`
      );
      let JsonResponse = await response.json();
      let result = {
        city: city,
        temp: JsonResponse.main.temp,
        temp_min: JsonResponse.main.temp_min,
        temp_max: JsonResponse.main.temp_max,
        humidity: JsonResponse.main.humidity,
        feels_like: JsonResponse.main.feels_like,
        wind_speed: JsonResponse.wind.speed,
        weather: JsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      setError("")
      let newInfo = await getWeather();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "10px",
        position: "relative",
        right: "2.7rem",
      }}
    >
        {error && <p style={{ color: "red" }}>No such place in our api</p>}
      <form onSubmit={handleSubmit}>
        <input
          style={{

            borderRadius: "1rem",
            width: "15rem",
            height: "3rem",
            outline: "none",
            textAlign: "center",
            marginRight: "5px",
            color: "#111"
          }}
          id="city"
          label="City Name"
          value={city}
          placeholder="Enter city"
          onChange={handleChange}
        />

        <button
          style={{
            // margin: "0px 0 px 0px",
            width: "5rem",
            height: "2.8rem",
            borderRadius: "1rem",
            background: "rgba(255,255,255,0.5)"
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    
      <h2 style={{fontFamily: "sans-serif", color: "#fff", position: "relative", left: "2.5rem", }} >Today&apos;s highlights</h2>
      
    </div>
  );
}

export default SearchBox;
