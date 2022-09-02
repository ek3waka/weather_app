import './style.css'
import Magnifier from './Icons/magnify.svg'
import { WeatherReport } from './Items modules/createWeatherReport'
import { ShowWeatherReport } from './DOM modules/showWeatherReportCard'
import { getWeekDay } from './Commons Functions/dateFunctions'
import { ShowWeatherDailyForecast } from './DOM modules/showWeatherDailyForecast'

const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)

const header = document.createElement('header')
wrapper.appendChild(header)

const main = document.createElement('main')

const footer = document.createElement('footer')
const legalInfo = document.createElement('div')
legalInfo.classList.add('legal-info')
const siteName = document.createElement('div')
const copyRight = document.createElement('div')
siteName.textContent = `Via OpenWeatherMap`
copyRight.textContent = 'All rights reserved'
legalInfo.append(siteName, copyRight)
footer.appendChild(legalInfo)
wrapper.append(main, footer)



const searchField = document.createElement('div')
searchField.classList.add('search-field')

const searchInput = document.createElement('input')
searchInput.type = 'search'
searchInput.classList.add('search-input')

const searchButton = document.createElement('button')
searchButton.classList.add('search-button')

const searchButtonIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
searchButtonIcon.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", Magnifier);
searchButtonIcon.setAttribute("viewBox", "0 0 24 24");
searchButtonIcon.classList.add('img-small');
const searchButtonIconImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "path"
);
searchButtonIconImg.setAttribute(
  "d",
  "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
);
searchButtonIcon.append(searchButtonIconImg);
searchButton.append(searchButtonIcon);


searchField.append(searchInput, searchButton)

header.append(searchField)





const defaultCity = 'Saint-Petersburg'
/* let defaultLatitude = 
let defaultLongitude =  */





/* const weatherForecastHeader = document.createElement('h1')
weatherForecastHeader.classList.add('weather-forecast-header')
weatherForecastHeader.textContent = 'Daily forecast'

const weatherForecastContainer = document.createElement('div')
weatherForecastContainer.classList.add('weather-forecast-container') */
    
/* const weatherForecastItem = document.createElement('div')
weatherForecastItem.classList.add('weather-forecast-item')
const weatherForecastItemHeader = document.createElement('div')
weatherForecastItemHeader.classList.add('weather-forecast-item-header')
const weatherForecastItemHeaderDay = document.createElement('div')
weatherForecastItemHeaderDay.classList.add('weather-forecast-item-header-day')
weatherForecastItemHeaderDay.textContent = 'Sat'             
const weatherForecastItemHeaderDate = document.createElement('div')
weatherForecastItemHeaderDate.classList.add('weather-forecast-item-header-date')
weatherForecastItemHeaderDate.textContent = '27 aug'

weatherForecastItemHeader.append(weatherForecastItemHeaderDay, weatherForecastItemHeaderDate) */

/* const weatherForecastItemIcon = document.createElement('img') */
/* weatherForecastItemIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png` */

/* const weatherForecastItemTemperatureContainer = document.createElement('div')
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

 */
/* 

weatherForecastItem.append(weatherForecastItemHeader, 
  weatherForecastItemIcon, 
  weatherForecastItemTemperatureContainer, 
  weatherForecastItemText) */
    
    
    














    
/*     const weatherForecastItem2 = document.createElement('div')
    weatherForecastItem2.classList.add('weather-forecast-item')
    
    const weatherForecastItem3 = document.createElement('div')
    weatherForecastItem3.classList.add('weather-forecast-item')
    
    const weatherForecastItem4 = document.createElement('div')
    weatherForecastItem4.classList.add('weather-forecast-item')

    const weatherForecastItem5 = document.createElement('div')
    weatherForecastItem5.classList.add('weather-forecast-item')

    const weatherForecastItem6 = document.createElement('div')
    weatherForecastItem6.classList.add('weather-forecast-item')

    const weatherForecastItem7 = document.createElement('div')
    weatherForecastItem7.classList.add('weather-forecast-item')
    
    weatherForecastContainer.append(weatherForecastItem, 
      weatherForecastItem2, 
      weatherForecastItem3, 
      weatherForecastItem4, 
      weatherForecastItem5, 
      weatherForecastItem6, 
      weatherForecastItem7) */


/* main.append(weatherReportCard, weatherForecastHeader, weatherForecastContainer) */


function success(pos) {
  const crd = pos.coords
  getCurrentWeatherReport(crd.latitude, crd.longitude)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`)
}

navigator.geolocation.getCurrentPosition(success, error)




async function getCurrentWeatherReport(latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
  let responseJSON = await response.json()
  
  const weatherReportCard = new WeatherReport(responseJSON.name, 
                                              responseJSON.main.temp, 
                                              responseJSON.weather[0].main, 
                                              responseJSON.main.feels_like,
                                              responseJSON.main.pressure,
                                              responseJSON.wind.speed,
                                              responseJSON.main.humidity,
                                              responseJSON.weather[0].icon)                        
  const weatherReport = new ShowWeatherReport().DOM(weatherReportCard)
  main.append(weatherReport)
}




fetch('http://api.openweathermap.org/data/2.5/forecast?lat=59.8322&lon=30.2278&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const weatherForecast = []
        for (let item of response.list) {
          for (let key in item) {
            if (key == 'dt_txt' && item[key].includes('00:00:00')) {
              const night = {}
              let date = new Date(item[key].slice(0,10))
              let weekDay = getWeekDay(date)
              let month = date.toLocaleString("en-us", { month: "short" })
              night.date = `${date.getDate()} ${month}`
              night.tempMin = item.main.temp_min
              night.weekday = weekDay
              
              weatherForecast.push(night)
            }
            if (key == 'dt_txt' && item[key].includes('12:00:00')) {
              const day = {}
              day.tempMax = item.main.temp_max
              day.description = `${item.weather[0].main}`
              day.icon = `${item.weather[0].icon}`
              
              weatherForecast.push(day)
            }
            
            
          } 
        } 
        const arr = []
        for (let i=0; i<weatherForecast.length - 1; i+=2) {
          const obj = Object.assign(weatherForecast[i], weatherForecast[i+1])
          arr.push(obj)
        }
        const xui = new ShowWeatherDailyForecast()
        
      const weatherForecastWrapper = document.createElement('div')
      weatherForecastWrapper.classList.add('12334')
      const weatherForecastHeader = document.createElement('h1')
      weatherForecastHeader.classList.add('weather-forecast-header')
      weatherForecastHeader.textContent = 'Daily forecast'
      const weatherForecastContainer = document.createElement('div')
      weatherForecastContainer.classList.add('weather-forecast-container')
      weatherForecastWrapper.append(weatherForecastHeader, weatherForecastContainer)

        main.append(weatherForecastWrapper)
        for (let i=0; i<arr.length; i++) {
          main.append(xui.createItemDOM(arr[i]))
        }

      })



/* fetch('http://api.openweathermap.org/data/2.5/forecast?lat=59.8322&lon=30.2278&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return console.log(response)
    })  */

