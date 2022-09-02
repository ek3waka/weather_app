class WeatherDailyForecastItem {
    constructor(date, 
                tempMin, 
                weekday, 
                tempMax,
                description,
                icon) 
    {
        this.date = date
        this.minTemperature = tempMin
        this.weekday = weekday
        this.maxTemperature = tempMax       
        this.description = description
        this.icon = icon
    }

}

export {WeatherDailyForecastItem}