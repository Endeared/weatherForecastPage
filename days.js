// api url
const api_url2 = "https://api.openweathermap.org/data/3.0/onecall?lat=39.56&lon=-84.64&exclude=current,minutely,hourly,alerts&units=imperial&appid=38dff5928012cd8d29f11dc1b4f7b2c6"

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
   let img2 = document.getElementById('pic2').src=weather1

   let maxTemp4 = Math.round(data.daily[3].temp.max);
   let minTemp4 = Math.round(data.daily[3].temp.min);
   let day3Day = document.getElementById('day3Day').innerHTML = (calculateDay(3));
   let day3High = document.getElementById('day3High').innerHTML = maxTemp4 + " °F";
   let day3Low = document.getElementById('day3Low').innerHTML = minTemp4 + " °F";

   let maxTemp5 = Math.round(data.daily[4].temp.max);
   let minTemp5 = Math.round(data.daily[4].temp.min);
   let day4Day = document.getElementById('day4Day').innerHTML = (calculateDay(4));
   let day4High = document.getElementById('day4High').innerHTML = maxTemp5 + " °F";
   let day4Low = document.getElementById('day4Low').innerHTML = minTemp5 + " °F";

   let maxTemp6 = Math.round(data.daily[5].temp.max);
   let minTemp6 = Math.round(data.daily[5].temp.min);
   let day5Day = document.getElementById('day5Day').innerHTML = (calculateDay(5));
   let day5High = document.getElementById('day5High').innerHTML = maxTemp6 + " °F";
   let day5Low = document.getElementById('day5Low').innerHTML = minTemp6 + " °F";

   let maxTemp7 = Math.round(data.daily[6].temp.max);
   let minTemp7 = Math.round(data.daily[6].temp.min);
   let day6Day = document.getElementById('day6Day').innerHTML = (calculateDay(6));
   let day6High = document.getElementById('day6High').innerHTML = maxTemp7 + " °F";
   let day6Low = document.getElementById('day6Low').innerHTML = minTemp7 + " °F";

   let maxTemp8 = Math.round(data.daily[7].temp.max);
   let minTemp8 = Math.round(data.daily[7].temp.min);
   let day7Day = document.getElementById('day7Day').innerHTML = (calculateDay(7));
   let day7High = document.getElementById('day7High').innerHTML = maxTemp8 + " °F";
   let day7Low = document.getElementById('day7Low').innerHTML = minTemp8 + " °F";

}

getapi2(api_url2)
