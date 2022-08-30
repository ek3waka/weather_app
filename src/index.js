import './style.css'
import Magnifier from './Icons/magnify.svg'
import { WeatherReport } from './Items modules/createWeatherReport'
import { ShowWeatherReport } from './DOM modules/showWeatherReportCard'

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


function success(pos) {
  var crd = pos.coords;

  console.log('Ваше текущее местоположение:');
  console.log(`Широта: ${crd.latitude}`);
  console.log(`Долгота: ${crd.longitude}`);
  console.log(`Плюс-минус ${crd.accuracy} метров.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error);



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




fetch('http://api.openweathermap.org/data/2.5/weather?lat=59.9386&lon=30.3141&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
            return response.json();
    })
    .then(function(response) {
          console.log(response)
          const weatherReportCard = new WeatherReport(defaultCity, 
                                    response.main.temp, 
                                    response.weather[0].main, 
                                    response.main.feels_like,
                                    response.main.pressure,
                                    response.wind.speed,
                                    response.main.humidity,
                                    response.weather[0].icon)                        
          const weatherReport = new ShowWeatherReport().DOM(weatherReportCard)
          main.append(weatherReport)
    })
/* 
fetch('http://api.openweathermap.org/data/2.5/forecast?lat=59.9386&lon=30.3141&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        return console.log(response)
    }) */