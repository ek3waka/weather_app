class ShowWeatherDailyForecast {
    constructor() {
        
    }
    DOM() {
        
    }
}


const weatherForecastHeader = document.createElement('h1')
weatherForecastHeader.classList.add('weather-forecast-header')
weatherForecastHeader.textContent = 'Daily forecast'

const weatherForecastContainer = document.createElement('div')
weatherForecastContainer.classList.add('weather-forecast-container') 
    
const weatherForecastItem = document.createElement('div')
weatherForecastItem.classList.add('weather-forecast-item')
const weatherForecastItemHeader = document.createElement('div')
weatherForecastItemHeader.classList.add('weather-forecast-item-header')
const weatherForecastItemHeaderDay = document.createElement('div')
weatherForecastItemHeaderDay.classList.add('weather-forecast-item-header-day')
weatherForecastItemHeaderDay.textContent = 'Sat'             
const weatherForecastItemHeaderDate = document.createElement('div')
weatherForecastItemHeaderDate.classList.add('weather-forecast-item-header-date')
weatherForecastItemHeaderDate.textContent = '27 aug'

weatherForecastItemHeader.append(weatherForecastItemHeaderDay, weatherForecastItemHeaderDate) 

const weatherForecastItemIcon = document.createElement('img') 
weatherForecastItemIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png` 

const weatherForecastItemTemperatureContainer = document.createElement('div')
weatherForecastItemTemperatureContainer.classList.add('weather-forecast-item-temperature-container')

const weatherForecastItemTemperatureDay = document.createElement('div')
weatherForecastItemTemperatureDay.classList.add('weather-forecast-item-temperature-primal')
weatherForecastItemTemperatureDay.textContent = '19°'

const weatherForecastItemTemperatureNight = document.createElement('div')
weatherForecastItemTemperatureNight.classList.add('weather-forecast-item-temperature-secondary')
weatherForecastItemTemperatureNight.textContent = '12°'

weatherForecastItemTemperatureContainer.append(weatherForecastItemTemperatureDay, weatherForecastItemTemperatureNight)


const weatherForecastItemText = document.createElement('div')
weatherForecastItemText.classList.add('weather-forecast-item-text')
weatherForecastItemText.textContent = 'Party cloudy'



weatherForecastItem.append(weatherForecastItemHeader, 
  weatherForecastItemIcon, 
  weatherForecastItemTemperatureContainer, 
  weatherForecastItemText)