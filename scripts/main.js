//api key for openweathermap: 3db6ccfd4eb622f3848234c2faaba4f7

const checkZip = require("./checkZip")
const weatherSection = $("#weather-display")
const submitBtn = $("#submit-button")
submitBtn.click( () => { if(checkZip()){
    zipCode = $("#zipInput").val()
    console.log("true")
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=3db6ccfd4eb622f3848234c2faaba4f7`).then((weatherData) =>{
    console.log(weatherData)
    // weatherData = JSON.parse(weatherData)
    weatherSection.append($(`<h2>Weather for ${weatherData.name}, ${zipCode}</h2>`))
    weatherSection.append($(`<h3>The current tempurature is ${weatherData.main.temp} degrees Fahrenheit</h3>`))
    weatherSection.append($(`<h3>The current conditions are: ${weatherData.weather[0].main}</h3>`))
    weatherSection.append($(`<h3>The current wind speed is: ${weatherData.wind.speed} mph</h3>`))
    weatherSection.append($(`<h3>The current air pressure is: ${weatherData.main.pressure} Pa</h3>`))
    weatherSection.append($("<button id='three-day-forecast'>Display 5-day Forecast</button>"))
})

}
})