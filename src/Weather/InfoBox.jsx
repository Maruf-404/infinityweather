/* eslint-disable react/prop-types */

import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box } from "@mui/material";
import hotImg from "../assets/sunny.jpg";
import coldImg from "../assets/cold.jfif";
import rainImg from "../assets/rain.jpg";

function InfoBox({ info }) {
  let bg = info.humidity > 70 ? rainImg : info.temp > 22 ? hotImg : coldImg;

  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div
          style={{
            height: "14rem",
            width: "20rem",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            borderRadius: "1.2rem",
          }}
        >
          <div
            style={{
              position: "relative",
              left: "9.5rem",
              top: "1rem",
              fontSize: "1rem",
            }}
          >
            {info.humidity > 70 ? (
              <ThunderstormIcon />
            ) : info.temp > 22 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                position: "relative",
                top: "8rem",
                left: "0.8rem",
                background: "rgba(255,255,255,0.5)",
                borderRadius: ".6rem",
                width: "7rem",
                textTransform: "capitalize",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {info.city}
              <p style={{ fontSize: "0.9rem" }}>{date}</p>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                position: "relative",
                top: "8rem",
                right: ".7rem",
                background: "rgba(255,255,255,0.5)",
                borderRadius: ".6rem",
                width: "7rem",
                fontSize: "1rem",
                height: "3rem",
                textTransform: "capitalize",
              }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {info.weather}
              <p style={{ fontSize: "0.9rem" }}>{time}</p>
            </Typography>
          </div>
        </div>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              height: "6rem",
              width: "7rem",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ textAlign: "center" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <p style={{ fontSize: "0.9rem" }}>Tempreture</p>
              {info.temp}&deg;C
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              height: "6rem",
              width: "7rem",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "1.2rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <p style={{ fontSize: "0.9rem" }}>Humidity</p>
              {info.humidity}%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              height: "6rem",
              width: "7rem",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "1.2rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <p style={{ fontSize: "0.9rem" }}>Wind Status</p>
              {info.wind_speed}MPH
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              height: "6rem",
              width: "7rem",
              backgroundColor: "rgba(255,255,255,0.5)",
              borderRadius: "1rem",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "1.2rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              <p style={{ fontSize: "0.9rem" }}>Feels Like</p>
              {info.feels_like}&deg;C
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default InfoBox;
