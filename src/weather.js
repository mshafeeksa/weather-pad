export async function getWeatherData(location = "thrissur") {
    let getUrl = "https://api.weatherapi.com/v1/current.json?key=8ab0104c216246ceb46173237232312&q=" + location.toLowerCase();

    const weatherData = await fetch(getUrl, { mode: 'cors' });
    const data = await weatherData.json();
    return getData(data);
};

function getData(weather) {
    console.log(weather);
    const location = weather.location.name;
    const country = weather.location.country;
    const temp = weather.current.temp_c;
    const feelsLike = weather.current.feelslike_c;
    const localTime = weather.location.localtime;
    const cloudCoverage = weather.current.cloud;
    const wind = weather.current.wind_kph;
    const gust = weather.current.gust_kph;
    const humidity = weather.current.humidity;
    const precipitation = weather.current.precip_mm;
    const isDay = weather.current.is_day;
    const result = {
        location,
        country,
        temp,
        feelsLike,
        localTime,
        cloudCoverage,
        wind,
        gust,
        humidity,
        precipitation,
        isDay
    };
    return result;  
}