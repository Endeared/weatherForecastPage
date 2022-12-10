// api url
let lat = 39.5601
let lon = 84.6401

const api_url = "https://api.openweathermap.org/data/3.0/onecall?lat=39.56&lon=-84.64&exclude=minutely,hourly,daily,alerts&units=imperial&appid=38dff5928012cd8d29f11dc1b4f7b2c6"


// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
   /*  console.log(data); */
   console.log(data.current.temp);
   console.log(data.current.humidity)
   console.log(data.current.weather[0].description);
   currentTemp = Math.round(data.current.temp);
   currentWeather = data.current.weather[0].description;

   let words = currentWeather.split(" ");

   for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
   }

   let finalWeather = words.join(" ");


    let tempDiv = document.getElementById('temp').innerHTML = (currentTemp) + " °F";
    let weatherDiv = document.getElementById('weather').innerHTML = finalWeather;
}

function calcTime(offset) {
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (3600000 * offset));
    let newDateText = newDate.toString();
    let words = newDateText.split(" ");
    console.log(words[0])
    let day = words[0] + " " + words[1] + " " + words[2] + " " + words[3];
    let time = new Date();
    let newTime = (time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));

    let dayDiv = document.getElementById('date').innerHTML = day;
    let timeDiv = document.getElementById('time').innerHTML = newTime;


}

getapi(api_url)
calcTime(-5)
