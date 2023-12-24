import CloudBlack from "./icons/cloud-black.svg";
import CloudWhite from "./icons/cloud-white.svg";
import HumidityBlack from "./icons/humidity-black.svg";
import HumidityWhite from "./icons/humidity-white.svg";
import LocationBlack from "./icons/location-black.svg";
import LocationWhite from "./icons/location-white.svg";
import RainBlack from "./icons/rain-black.svg";
import RainWhite from "./icons/rain-white.svg";
import TimeBlack from "./icons/time-black.svg";
import TimeWhite from "./icons/time-white.svg";
import WindBlack from "./icons/wind-black.svg";
import WindWhite from "./icons/wind-white.svg";


export function setDayNightIcons(isDay) {
    const bodyElement = document.querySelector("body");
    const locationSearch = document.querySelector("#location");
    const searchIcon = document.querySelector("#search-icon");
    const locationIcon = document.querySelector(".location-container img");
    const cloudIcon = document.querySelector(".cloud-box img");
    const timeIcon = document.querySelector(".time-box img");
    const windIcon = document.querySelector(".wind-container img");
    const humidityIcon = document.querySelector(".humidity-container img");
    const rainIcon = document.querySelector(".rain-container img");

    if (isDay == 1) {
        searchIcon.classList.add("day-search");
        locationSearch.style.color = "#3b3b40";
        locationSearch.classList.add("day-location");
        locationSearch.classList.remove("night-location");
        searchIcon.classList.remove("night-search");
        bodyElement.style.backgroundColor = "#fff";
        bodyElement.classList.add("day");
        bodyElement.classList.remove("night");
        document.body.style.color = "#000";
        locationIcon.src = LocationBlack;
        cloudIcon.src = CloudBlack;
        timeIcon.src = TimeBlack;
        windIcon.src = WindBlack;
        humidityIcon.src = HumidityBlack;
        rainIcon.src = RainBlack;
    }
    else {
        document.body.style.color = "#fff";
        locationSearch.style.color = "#fff";
        locationSearch.classList.remove("day-location");
        locationSearch.classList.add("night-location");
        searchIcon.classList.add("night-search");
        searchIcon.classList.remove("day-search");
        bodyElement.classList.add("night");
        bodyElement.classList.remove("day");
        document.body.style.backgroundColor = "#000";
        locationIcon.src = LocationWhite;
        cloudIcon.src = CloudWhite;
        timeIcon.src = TimeWhite;
        windIcon.src = WindWhite;
        humidityIcon.src = HumidityWhite;
        rainIcon.src = RainWhite;
    }
}