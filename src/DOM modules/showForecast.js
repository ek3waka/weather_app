class ShowForecastContainer {
    DOM() {
      const weatherForecastWrapper = document.createElement('div')
      weatherForecastWrapper.classList.add('weather-forecast-wrapper')
      const weatherForecastHeader = document.createElement('h1')
      weatherForecastHeader.classList.add('weather-forecast-header')
      weatherForecastHeader.textContent = 'Daily forecast'
      const weatherForecastContainer = document.createElement('div')
      weatherForecastContainer.classList.add('weather-forecast-container')
      weatherForecastWrapper.append(weatherForecastHeader, weatherForecastContainer)
    
      return weatherForecastWrapper
    }
}

export {ShowForecastContainer}

