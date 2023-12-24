// import Logo from "./restaurant-logo.png";
// import generateMenu from "./menu";
import "./style.css";
import { getWeatherData } from './weather';
import { displayPage,displayLoading,endLoading } from './display';

displayLoading();
const newData = await getWeatherData();
endLoading();
displayPage(newData);
const search = document.querySelector("#search-icon");
search.addEventListener("click", async(e) => {
    e.preventDefault();
    displayLoading();
    const inputBox = document.querySelector("#location");
    const newData = await getWeatherData(inputBox.value);
    endLoading();
    displayPage(newData);
    inputBox.value = "";
})