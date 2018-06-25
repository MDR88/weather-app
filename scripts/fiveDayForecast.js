const checkZip = require("./checkZip")


$("#weather-display").on("click", "#three-day-forecast", () =>{
    console.log("Clicked")
    let zipCode = checkZip()
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&appid=3db6ccfd4eb622f3848234c2faaba4f7`).then((fiveDayForecast) =>{
        console.log(fiveDayForecast)
        let threeDaySectionEl = $("<section id='three-day-forecast'>")
        $("body").append(threeDaySectionEl)
        console.log(fiveDayForecast.list.length)
        for (let i=5; i<fiveDayForecast.list.length; i=i+8) {
            console.log(fiveDayForecast.list[i].dt_txt)
            dateVar = fiveDayForecast.list[i].dt_txt
            dateVar = dateVar.slice(0,11)
            threeDaySectionEl.append($(`<h4>${dateVar}: ${fiveDayForecast.list[i].main.temp}F and ${fiveDayForecast.list[i].weather[0].description}</h4>`))
        }

    })
})