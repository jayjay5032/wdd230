const d = Math.floor(Date.now() / 1000);
const currentTemp = document.querySelector('#current-temp');
const weatherIcon0 = document.querySelector('.weather-icon');
const forecast = document.querySelector('#forecast');
let weatherIcon1 = document.createElement('img');
let weatherIcon2 = document.createElement('img');
let weatherIcon3 = document.createElement('img');
const wind_speed = document.getElementById("wind");
var wind_chill = document.getElementById("wind_chill");
const captionDesc = document.querySelector('figcaption');
let captionDesc1 = document.createElement('figcaption');
let captionDesc2 = document.createElement('figcaption');
let captionDesc3 = document.createElement('figcaption');
const humidity = document.getElementById('humidity');
let day1_div = document.createElement('section');
let day2_div = document.createElement('section');
let day3_div = document.createElement('section');
let day1temp = document.createElement('p');
let day2temp = document.createElement('p');
let day3temp = document.createElement('p');
let night1temp = document.createElement('p');
let night2temp = document.createElement('p');
let night3temp = document.createElement('p');
let card = document.createElement('section');
let day1headline = document.createElement('h3');
let day2headline = document.createElement('h3');
let day3headline = document.createElement('h3');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.338&units=imperial&appid=26e68319cfd447b4254c6a56af730573'

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
  weatherIcon0.setAttribute('src', iconsrc);
  weatherIcon0.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  humidity.textContent = `Humidity: ${weatherData.current.humidity}%`
  day1headline.textContent = `Tomorrow`
  const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
  const desc1 = weatherData.daily[0].weather[0].description;
  captionDesc1.textContent = desc1;
  weatherIcon1.setAttribute('src', iconsrc1);
  weatherIcon1.setAttribute('alt', desc1);
  weatherIcon1.setAttribute('class', 'weather-icon');
  day1temp.textContent = `Day: ${weatherData.daily[0].temp.day.toFixed(0)} °F`;
  night1temp.textContent = `Night: ${weatherData.daily[0].temp.night.toFixed(0)} °F`;
  day2headline.textContent = `In 2 Days`
  const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
  const desc2 = weatherData.daily[1].weather[0].description;
  captionDesc2.textContent = desc2;
  weatherIcon2.setAttribute('src', iconsrc2);
  weatherIcon2.setAttribute('alt', desc2);
  weatherIcon2.setAttribute('class', 'weather-icon');
  day2temp.textContent = `Day: ${weatherData.daily[1].temp.day.toFixed(0)} °F`;
  night2temp.textContent = `Night: ${weatherData.daily[1].temp.night.toFixed(0)} °F`;
  day3headline.textContent = `In 3 Days`
  const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
  const desc3 = weatherData.daily[2].weather[0].description;
  captionDesc3.textContent = desc3;
  weatherIcon3.setAttribute('src', iconsrc3);
  weatherIcon3.setAttribute('alt', desc3);
  weatherIcon3.setAttribute('class', 'weather-icon');
  day3temp.textContent = `Day: ${weatherData.daily[2].temp.day.toFixed(0)} °F`;
  night3temp.textContent = `Night: ${weatherData.daily[2].temp.night.toFixed(0)} °F`;
  day1_div.appendChild(day1headline);
  day1_div.appendChild(weatherIcon1);
  day1_div.appendChild(captionDesc1);
  day1_div.appendChild(day1temp);
  day1_div.appendChild(night1temp);
  day2_div.appendChild(day2headline);
  day2_div.appendChild(weatherIcon2);
  day2_div.appendChild(captionDesc2);
  day2_div.appendChild(day2temp);
  day2_div.appendChild(night2temp);
  day3_div.appendChild(day3headline);
  day3_div.appendChild(weatherIcon3);
  day3_div.appendChild(captionDesc3);
  day3_div.appendChild(day3temp);
  day3_div.appendChild(night3temp);
  day1_div.setAttribute("class", "weatherData");
  day2_div.setAttribute("class", "weatherData");
  day3_div.setAttribute("class", "weatherData");

  forecast.appendChild(day1_div);
  forecast.appendChild(day2_div);
  forecast.appendChild(day3_div);

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
      console.log(data); //  this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}  
apiFetch();