class ShowWeatherReport {
    DOM(weatherReport) {
        const wrapper = document.querySelector('.wrapper')
        wrapper.style.background = `url('../src/Images/${weatherReport.description}.jpg')`

        const weatherReportCard = document.createElement('div')
        weatherReportCard.classList.add('weather-report-card')

        const weatherReportCardCity = document.createElement('div')
        weatherReportCardCity.classList.add('weather-report-card-city')
        weatherReportCardCity.textContent = `${weatherReport.city}`

        const weatherReportCardDescription = document.createElement('div')
        weatherReportCardDescription.classList.add('weather-report-card-description')
        const weatherReportCardDescriptionIcon = document.createElement('img')
        weatherReportCardDescriptionIcon.src = `http://openweathermap.org/img/wn/${weatherReport.icon}.png`
        weatherReportCardDescriptionIcon.classList.add('weather-report-card-img')

        const weatherReportCardDescriptionTemperature = document.createElement('div')
        weatherReportCardDescriptionTemperature.classList.add('weather-report-card-description-temperature')
        weatherReportCardDescriptionTemperature.textContent = `${Math.round(weatherReport.temperature)}°C`
       

        weatherReportCardDescription.append(weatherReportCardDescriptionIcon, 
                                            weatherReportCardDescriptionTemperature)

        const weatherReportCardText = document.createElement('div')
        weatherReportCardText.classList.add('weather-report-card-text')
        weatherReportCardText.textContent = `${weatherReport.description}`

        const weatherReportCardDetailsContainer = document.createElement('div')
        weatherReportCardDetailsContainer.classList.add('weather-report-card-details-container')

        const weatherReportCardDetailsFeelsTemp = document.createElement('div')
        weatherReportCardDetailsFeelsTemp.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsFeelsTemp.textContent = `Feels like ${Math.round(weatherReport.feelstemperature)}°`

        const weatherReportCardDetailsWind = document.createElement('div')
        weatherReportCardDetailsWind.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsWind.textContent = `Wind ${Math.round(weatherReport.wind)}m/s`

        const weatherReportCardDetailsPressure = document.createElement('div')
        weatherReportCardDetailsPressure.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsPressure.textContent = `Pressure ${Math.round(weatherReport.pressure * 0.75)}mm`

        const weatherReportCardDetailsHumidity = document.createElement('div')
        weatherReportCardDetailsHumidity.classList.add('weather-report-card-details-item')
        weatherReportCardDetailsHumidity.textContent = `Humidity ${Math.round(weatherReport.humidity)}%`

        weatherReportCardDetailsContainer.append(weatherReportCardDetailsFeelsTemp, 
                                                weatherReportCardDetailsWind, 
                                                weatherReportCardDetailsPressure, 
                                                weatherReportCardDetailsHumidity)

        weatherReportCard.append(weatherReportCardCity, 
                                weatherReportCardDescription, 
                                weatherReportCardText, 
                                weatherReportCardDetailsContainer)
        return weatherReportCard
    }
}


export {ShowWeatherReport}