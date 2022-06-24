//const temperature = document.getElementById("temp");
//const wind_speed = document.getElementById("wind");
var wind_chill = document.getElementById("wind_chill");
const temperature = 49;
const wind_speed = 5


if (temperature <= 50 && wind_speed > 3) {
    let wind_chill_math = (35.74 + (0.6215 * temperature))-(35.75 * Math.pow(wind_speed,0.16)) + (0.4275*temperature*Math.pow(wind_speed,0.16));   
    let wind_chilltemp = Math.round((wind_chill_math + Number.EPSILON)*10)/100;
    wind_chill.textContent = wind_chilltemp;
} else {
    wind_chill.innerHTML = "N/A!!";
}