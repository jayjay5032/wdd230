const d = Math.floor(Date.now() / 1000);
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const wind_speed = document.getElementById("wind");
var wind_chill = document.getElementById("wind_chill");
const captionDesc = document.querySelector('figcaption');
const humidity = document.getElementById('humidity');
const forecast_div = document.getElementById('forecast');
let day1temp = document.createElement('p');
let day2temp = document.createElement('p');
let day3temp = document.createElement('p');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=imperial&appid=26e68319cfd447b4254c6a56af730573'

function displayResults(weatherData) {
    currentTemp.textContent = `${weatherData.current.temp.toFixed(0)} °F`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
	const wind_speed_math = weatherData.current.wind_speed
    if (currentTemp <= 50 && wind_speed_math > 3) {
      let wind_chill_math = (35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(wind_speed_math,0.16)) + (0.4275*currentTemp*Math.pow(wind_speed_math,0.16));   
      let wind_chilltemp = Math.round((wind_chill_math + Number.EPSILON)*10)/100;
      wind_chill.textContent = `Wind Chill: ${wind_chilltemp}`;
    } else {
        wind_chill.textContent = "Wind Chill: N/A";
    }
    wind_speed.textContent = `Wind Speed: ${wind_speed_math} m/s`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidity.textContent = `Humidity: ${weatherData.current.humidity}%`
	day1temp.textContent = `Tomorrow: ${weatherData.daily[0].temp.day.toFixed(0)} °F`;
	day2temp.textContent = `In 2 days: ${weatherData.daily[1].temp.day.toFixed(0)} °F`;
	day3temp.textContent = `In 3 days: ${weatherData.daily[2].temp.day.toFixed(0)} °F`;
	forecast_div.appendChild(day1temp);
	forecast_div.appendChild(day2temp);
	forecast_div.appendChild(day3temp);
  try {
    if (d >= weatherData.alerts[0].start && d <= weatherData.alerts[0].end) {
      document.getElementById("banner").style.display = "grid";
      let alert_text = document.getElementById("alert");
      alert_text.textContent = `${weatherData.alerts[0].sender_name}: ${weatherData.alerts[0].description}`;
    };
  }
  catch (e) {return;};
  
}

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}  
apiFetch();