// api url
let lat = 39.5601
let lon = 84.6401

const api_url = "https://api.openweathermap.org/data/3.0/onecall?lat=39.56&lon=-84.64&exclude=minutely,hourly,daily,alerts&units=imperial&appid=38dff5928012cd8d29f11dc1b4f7b2c6"

let searchBar = document.getElementById('search');
searchBar.setAttribute("onkeydown", "search(this)");


function search(ele) {
    if (event.key == 'Enter') {
        console.log(ele.value)
        cityInput = ele.value;
        const city_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&APPID=38dff5928012cd8d29f11dc1b4f7b2c6`
        getCity(city_url);
    }
}


async function getCity(url) {

    const response = await fetch(url);


    let data = await response.json();
    currentTemp = Math.round(data.main.temp);
    currentWeather = data.weather[0].main;
    coordLon = data.coord.lon;
    coordLat = data.coord.lat;

    const cityForecast_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordLat}&lon=${coordLon}&exclude=minutely,hourly,daily,alerts&units=imperial&appid=38dff5928012cd8d29f11dc1b4f7b2c6`


    let words = currentWeather.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    let finalWeather = words.join(" ");


    let tempDiv = document.getElementById('temp').innerHTML = (currentTemp) + " °F";
    let weatherDiv = document.getElementById('weather').innerHTML = finalWeather;
}


async function getapi(url) {

    const response = await fetch(url);

    var data = await response.json();
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



const api_url2 = "https://api.openweathermap.org/data/3.0/onecall?lat=39.56&lon=-84.64&exclude=current,minutely,hourly,alerts&units=imperial&appid=38dff5928012cd8d29f11dc1b4f7b2c6"
const london = "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=38dff5928012cd8d29f11dc1b4f7b2c6"

// Defining async function
async function getapi2(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function calculateDay(mod) {
        let today = new Date();
        let currentDay = today.getDay();
        if (mod === 0 || mod === 7) {
            return(days[currentDay])
        }

        let newDay = currentDay + mod;
        if (newDay > 6) {
            newDay = 0 + newDay - 7;
        }
        return(days[newDay])

    }

   /*  console.log(data); */
//    let maxTemp1 = Math.round(data.daily[0].temp.max);
//    let minTemp1 = Math.round(data.daily[0].temp.min);
//    let day1Div = document.getElementById('day1').innerHTML = maxTemp1 + " " +  minTemp1 + " " + (calculateDay(0));

   let maxTemp2 = Math.round(data.daily[1].temp.max);
   let minTemp2 = Math.round(data.daily[1].temp.min);
   let weatherIcon1 = data.daily[1].weather[0].icon;
   let weather1 = 'http://openweathermap.org/img/w/' + weatherIcon1 + '.png'
   let day1Day = document.getElementById('day1Day').innerHTML = (calculateDay(1));
   let day1High = document.getElementById('day1High').innerHTML = maxTemp2 + " °F";
   let day1Low = document.getElementById('day1Low').innerHTML = minTemp2 + " °F";
   let img1 = document.getElementById('pic1').src=weather1

   let maxTemp3 = Math.round(data.daily[2].temp.max);
   let minTemp3 = Math.round(data.daily[2].temp.min);
   let weatherIcon2 = data.daily[2].weather[0].icon;
   let weather2 = 'http://openweathermap.org/img/w/' + weatherIcon2 + '.png'
   let day2Day = document.getElementById('day2Day').innerHTML = (calculateDay(2));
   let day2High = document.getElementById('day2High').innerHTML = maxTemp3 + " °F";
   let day2Low = document.getElementById('day2Low').innerHTML = minTemp3 + " °F";
   let img2 = document.getElementById('pic2').src=weather2

   let maxTemp4 = Math.round(data.daily[3].temp.max);
   let minTemp4 = Math.round(data.daily[3].temp.min);
   let day3Day = document.getElementById('day3Day').innerHTML = (calculateDay(3));
   let day3High = document.getElementById('day3High').innerHTML = maxTemp4 + " °F";
   let day3Low = document.getElementById('day3Low').innerHTML = minTemp4 + " °F";
   let weatherIcon3 = data.daily[3].weather[0].icon;
   let weather3 = 'http://openweathermap.org/img/w/' + weatherIcon3 + '.png'
   let img3 = document.getElementById('pic3').src=weather3

   let maxTemp5 = Math.round(data.daily[4].temp.max);
   let minTemp5 = Math.round(data.daily[4].temp.min);
   let day4Day = document.getElementById('day4Day').innerHTML = (calculateDay(4));
   let day4High = document.getElementById('day4High').innerHTML = maxTemp5 + " °F";
   let day4Low = document.getElementById('day4Low').innerHTML = minTemp5 + " °F";
   let weatherIcon4 = data.daily[4].weather[0].icon;
   let weather4 = 'http://openweathermap.org/img/w/' + weatherIcon4 + '.png'
   let img4 = document.getElementById('pic4').src=weather4

   let maxTemp6 = Math.round(data.daily[5].temp.max);
   let minTemp6 = Math.round(data.daily[5].temp.min);
   let day5Day = document.getElementById('day5Day').innerHTML = (calculateDay(5));
   let day5High = document.getElementById('day5High').innerHTML = maxTemp6 + " °F";
   let day5Low = document.getElementById('day5Low').innerHTML = minTemp6 + " °F";
   let weatherIcon5 = data.daily[5].weather[0].icon;
   let weather5 = 'http://openweathermap.org/img/w/' + weatherIcon5 + '.png'
   let img5 = document.getElementById('pic5').src=weather5

   let maxTemp7 = Math.round(data.daily[6].temp.max);
   let minTemp7 = Math.round(data.daily[6].temp.min);
   let day6Day = document.getElementById('day6Day').innerHTML = (calculateDay(6));
   let day6High = document.getElementById('day6High').innerHTML = maxTemp7 + " °F";
   let day6Low = document.getElementById('day6Low').innerHTML = minTemp7 + " °F";
   let weatherIcon6 = data.daily[6].weather[0].icon;
   let weather6 = 'http://openweathermap.org/img/w/' + weatherIcon6 + '.png'
   let img6 = document.getElementById('pic6').src=weather6

   let maxTemp8 = Math.round(data.daily[7].temp.max);
   let minTemp8 = Math.round(data.daily[7].temp.min);
   let day7Day = document.getElementById('day7Day').innerHTML = (calculateDay(7));
   let day7High = document.getElementById('day7High').innerHTML = maxTemp8 + " °F";
   let day7Low = document.getElementById('day7Low').innerHTML = minTemp8 + " °F";
   let weatherIcon7 = data.daily[7].weather[0].icon;
   let weather7 = 'http://openweathermap.org/img/w/' + weatherIcon7 + '.png'
   let img7 = document.getElementById('pic7').src=weather7

}

getapi2(api_url2)
getapi(api_url)
calcTime(-5)
