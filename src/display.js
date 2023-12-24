import { setDayNightIcons } from "./day-night-change";
export function displayPage(data) {
    const location = document.querySelector(".location-name");
    location.textContent = data.location;
    const country = document.querySelector(".location-details");
    country.textContent = data.country;
    const temp = document.querySelector(".temperature-container .value");
    temp.textContent = data.temp;
    const feelsLike = document.querySelector(".feels-like-box");
    feelsLike.textContent = `Feels like ${data.feelsLike} \u00B0c`;
    const cloudCoverage = document.querySelector(".cloud-container .container-right");
    cloudCoverage.textContent = "Cloud coverage " + data.cloudCoverage + "%";
    const wind = document.querySelector(".wind-speed");
    wind.textContent = data.wind + " kmph";
    const gust = document.querySelector(".gust-value");
    gust.textContent = data.gust + " kmph";
    const humidity = document.querySelector(".humidity-value");
    humidity.textContent = data.humidity + "%";
    const precip = document.querySelector(".precipitation-value");
    precip.textContent = data.precipitation + " mm";
    const time = document.querySelector(".time");
    time.textContent = data.localTime;
    setDayNightIcons(data.isDay);  
}
export function displayLoading() {
    const main = document.querySelector(".main");
    main.classList.add("hide");
    const loading = document.querySelector(".loading");
    loading.classList.remove("hide");
}
export function endLoading() {
    const main = document.querySelector(".main");
    main.classList.remove("hide");
    const loading = document.querySelector(".loading");
    loading.classList.add("hide");    
}