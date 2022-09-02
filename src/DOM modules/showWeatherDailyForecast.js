class ShowForecastItem {
      createItemDOM(forecastItem) {
            const weatherForecastItem = document.createElement('div')
            weatherForecastItem.classList.add('weather-forecast-item')
            const weatherForecastItemHeader = document.createElement('div')
            weatherForecastItemHeader.classList.add('weather-forecast-item-header')
            const weatherForecastItemHeaderDay = document.createElement('div')
            weatherForecastItemHeaderDay.classList.add('weather-forecast-item-header-day')
            weatherForecastItemHeaderDay.textContent = `${forecastItem.weekday}`            
            const weatherForecastItemHeaderDate = document.createElement('div')
            weatherForecastItemHeaderDate.classList.add('weather-forecast-item-header-date')
            weatherForecastItemHeaderDate.textContent = `${forecastItem.date}`

            weatherForecastItemHeader.append(weatherForecastItemHeaderDay, weatherForecastItemHeaderDate) 

            const weatherForecastItemIcon = document.createElement('img') 
            weatherForecastItemIcon.src = `http://openweathermap.org/img/wn/${forecastItem.icon}@2x.png` 
            weatherForecastItemIcon.classList.add('weather-forecast-img')

            const weatherForecastItemTemperatureContainer = document.createElement('div')
            weatherForecastItemTemperatureContainer.classList.add('weather-forecast-item-temperature-container')

            const weatherForecastItemTemperatureDay = document.createElement('div')
            weatherForecastItemTemperatureDay.classList.add('weather-forecast-item-temperature-primal')
            weatherForecastItemTemperatureDay.textContent = `${Math.round(forecastItem.maxTemperature)}°`

            const weatherForecastItemTemperatureNight = document.createElement('div')
            weatherForecastItemTemperatureNight.classList.add('weather-forecast-item-temperature-secondary')
            weatherForecastItemTemperatureNight.textContent = `${Math.round(forecastItem.minTemperature)}°`

            weatherForecastItemTemperatureContainer.append(weatherForecastItemTemperatureDay, 
                                                           weatherForecastItemTemperatureNight)

            const weatherForecastItemText = document.createElement('div')
            weatherForecastItemText.classList.add('weather-forecast-item-text')
            weatherForecastItemText.textContent = `${forecastItem.description}`

            weatherForecastItem.append(weatherForecastItemHeader, 
                                    weatherForecastItemIcon, 
                                    weatherForecastItemTemperatureContainer, 
                                    weatherForecastItemText)                  
            return weatherForecastItem
      }
}

export {ShowForecastItem}