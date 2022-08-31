import { convertDateToTxt } from "../Commons Functions/dateFunctions"


class WeatherDailyForecast {
    constructor(list) {
        this.list = list
        this.days = []
    }
    IsolateDays() {
        for (let i=0; i<5; i++) {
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate()+1)
            let tomorrowConverted = convertDateToTxt(tomorrow)
            this.days.push(tomorrowConverted)
            console.log(this.days)
        }
        return this.days    
    }
}

export {WeatherDailyForecast}