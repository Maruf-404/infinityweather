import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import bg from "../assets/wbg.jpg";
import { Box } from "@mui/material";

function Weather() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "___",
    feelslike: "___",
    humidity: "___",
    temp: "___",
    tempmax: "___",
    tempmin: "___",
    wind_speed: "___",
    weather: "___",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        gap: "10px",
      }}
    >
      <h1
        style={{
          fontFamily: "sans-serif",
          color: "#fff",
          marginBottom: "1rem",
        }}
      >
        Infinity Weather
      </h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </Box>
  );
}

export default Weather;
