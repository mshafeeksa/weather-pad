// import Logo from "./restaurant-logo.png";
// import generateMenu from "./menu";
import "./style.css";
import { getWeatherData } from './weather';
import { displayPage } from './display';
const newData = await getWeatherData();
displayPage(newData);
const search = document.querySelector("#search-icon");
search.addEventListener("click", async(e) => {
    e.preventDefault();
    const inputBox = document.querySelector("#location");
    const newData = await getWeatherData(inputBox.value);
    displayPage(newData);
    inputBox.value = "";
})