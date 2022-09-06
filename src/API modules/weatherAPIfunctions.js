import { WeatherReport } from '../Items modules/createWeatherReport'
import { ShowWeatherReport } from '../DOM modules/showWeatherReportCard'
import { getWeekDay } from '../Commons Functions/dateFunctions'
import { ShowForecastItem } from '../DOM modules/showWeatherDailyForecast'
import { WeatherDailyForecastItem } from '../Items modules/createWeatherDailyForecastItem'
import { ShowForecastContainer } from '../DOM modules/showForecast'


const defaultLatitude = 55.7504461
const defaultLongitude = 37.6174943

async function requestCityWeather(city, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`)
    let responseJSON = await response.json()
    let responceLatitude = responseJSON[0].lat
    let responceLongitude = responseJSON[0].lon 
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }  
    getCurrentWeatherReport(responceLatitude, responceLongitude)
    getDailyForecast(responceLatitude, responceLongitude)
}
  
function success(pos) {
    const crd = pos.coords
    getCurrentWeatherReport(crd.latitude, crd.longitude)
    getDailyForecast(crd.latitude, crd.longitude)
}

function error() {
    getCurrentWeatherReport(defaultLatitude, defaultLongitude)
    getDailyForecast(defaultLatitude, defaultLongitude)
}
  
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
    const main = document.querySelector('main')
    main.append(weatherReport)
}
  
  
async function getDailyForecast (latitude, longitude, apikey = '5efcd16ebd2a5605a8bebd21397f317e') {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
    let responseJSON = await response.json()
    const weatherForecast = []
    const main = document.querySelector('main')
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

 export {requestCityWeather, getCurrentWeatherReport, error, success} 