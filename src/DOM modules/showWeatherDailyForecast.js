
class ShowWeatherDailyForecast {
    createContainerDOM() {
      const main = document.querySelector('main')
      const weatherForecastWrapper = document.createElement('div')
      weatherForecastWrapper.classList.add('12334')
      const weatherForecastHeader = document.createElement('h1')
      weatherForecastHeader.classList.add('weather-forecast-header')
      weatherForecastHeader.textContent = 'Daily forecast'
      const weatherForecastContainer = document.createElement('div')
      weatherForecastContainer.classList.add('weather-forecast-container')
      weatherForecastWrapper.append(weatherForecastHeader, weatherForecastContainer)
    
      return weatherForecastWrapper
    }
    createItemDOM(weatherDailyForecast) {
      const weatherForecastContainer = document.querySelector('.weather-forecast-container')

      const weatherForecastItem = document.createElement('div')
      weatherForecastItem.classList.add('weather-forecast-item')
      const weatherForecastItemHeader = document.createElement('div')
      weatherForecastItemHeader.classList.add('weather-forecast-item-header')
      const weatherForecastItemHeaderDay = document.createElement('div')
      weatherForecastItemHeaderDay.classList.add('weather-forecast-item-header-day')
      weatherForecastItemHeaderDay.textContent = `${weatherDailyForecast.weekday}`            
      const weatherForecastItemHeaderDate = document.createElement('div')
      weatherForecastItemHeaderDate.classList.add('weather-forecast-item-header-date')
      weatherForecastItemHeaderDate.textContent = `${weatherDailyForecast.date}`

      weatherForecastItemHeader.append(weatherForecastItemHeaderDay, weatherForecastItemHeaderDate) 

      const weatherForecastItemIcon = document.createElement('img') 
      weatherForecastItemIcon.src = `http://openweathermap.org/img/wn/${weatherDailyForecast.icon}@2x.png` 
      weatherForecastItemIcon.classList.add('weather-forecast-img')

      const weatherForecastItemTemperatureContainer = document.createElement('div')
      weatherForecastItemTemperatureContainer.classList.add('weather-forecast-item-temperature-container')

      const weatherForecastItemTemperatureDay = document.createElement('div')
      weatherForecastItemTemperatureDay.classList.add('weather-forecast-item-temperature-primal')
      weatherForecastItemTemperatureDay.textContent = `${Math.round(weatherDailyForecast.tempMax)}°`

      const weatherForecastItemTemperatureNight = document.createElement('div')
      weatherForecastItemTemperatureNight.classList.add('weather-forecast-item-temperature-secondary')
      weatherForecastItemTemperatureNight.textContent = `${Math.round(weatherDailyForecast.tempMin)}°`

      weatherForecastItemTemperatureContainer.append(weatherForecastItemTemperatureDay, 
                                                     weatherForecastItemTemperatureNight)


      const weatherForecastItemText = document.createElement('div')
      weatherForecastItemText.classList.add('weather-forecast-item-text')
      weatherForecastItemText.textContent = `${weatherDailyForecast.description}`

      weatherForecastItem.append(weatherForecastItemHeader, 
                                weatherForecastItemIcon, 
                                weatherForecastItemTemperatureContainer, 
                                weatherForecastItemText)
                                 
      weatherForecastContainer.append(weatherForecastItem)
      }

}

export {ShowWeatherDailyForecast}