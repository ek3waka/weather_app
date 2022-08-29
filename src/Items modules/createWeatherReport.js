class WeatherReport {
    constructor(city, 
                temperature, 
                description, 
                feelstemperature, 
                pressure, 
                wind, 
                humidity, 
                icon) {
        this.city = city
        this.temperature = temperature
        this.description = description
        this.feelstemperature = feelstemperature
        this.pressure = pressure
        this.wind = wind
        this.humidity = humidity
        this.icon = icon
    }
}

export {WeatherReport}



//description = response.weather[0].main
//temp = response.main.temp
//feels = response.main.feels_like
//pressure = response.main.pressure
//humidity = response.main.humidity
//wind = response.wind.speed
//iconsrc = response.weather[0].icon


