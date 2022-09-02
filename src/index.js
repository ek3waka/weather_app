import './style.css'
import Magnifier from './Icons/magnify.svg'
import { WeatherReport } from './Items modules/createWeatherReport'
import { ShowWeatherReport } from './DOM modules/showWeatherReportCard'
import { getWeekDay } from './Commons Functions/dateFunctions'
import { ShowForecastItem } from './DOM modules/showWeatherDailyForecast'
import { WeatherDailyForecastItem } from './Items modules/createWeatherDailyForecastItem'
import { ShowForecastContainer } from './DOM modules/showForecast'

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
searchInput.required = true

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

searchButton.addEventListener('click', requestCityWeather())


searchField.append(searchInput, searchButton)

header.append(searchField)

function requestCityWeather() {

}

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


async function getDailyForecast (latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
  let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
  let responseJSON = await response.json()
  const weatherForecast = []
        for (let item of responseJSON.list) {
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
        const wrapper = new ShowForecastContainer().DOM()
        main.append(wrapper)
        const container = document.querySelector('.weather-forecast-container')
        for (let i=0; i<weatherForecast.length - 1; i+=2) {
          const obj = Object.assign(weatherForecast[i], weatherForecast[i+1])
          arr.push(obj)
          const forecastItem = new WeatherDailyForecastItem(obj.date, 
                                                            obj.tempMin, 
                                                            obj.weekday, 
                                                            obj.tempMax,
                                                            obj.description,
                                                            obj.icon)
          const showForecastItem = new ShowForecastItem().createItemDOM(forecastItem)
          container.append(showForecastItem)
        }
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
        const wrapper = new ShowForecastContainer().DOM()
        main.append(wrapper)
        const container = document.querySelector('.weather-forecast-container')
        for (let i=0; i<weatherForecast.length - 1; i+=2) {
          const obj = Object.assign(weatherForecast[i], weatherForecast[i+1])
          arr.push(obj)
          const forecastItem = new WeatherDailyForecastItem(obj.date, 
                                                            obj.tempMin, 
                                                            obj.weekday, 
                                                            obj.tempMax,
                                                            obj.description,
                                                            obj.icon)
          const showForecastItem = new ShowForecastItem().createItemDOM(forecastItem)
          container.append(showForecastItem)
        }
      })
