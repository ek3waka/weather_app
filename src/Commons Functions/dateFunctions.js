function convertDateToTxt(date) {
    let month = date.getMonth() + 1
    let day =  date.getDate()
    if (month < 10) {
        month = `0${month}`
    } else month = `${month}`
    if (day< 10) {
        day = `0${day}`
    } else day = `${day}`
    return `${date.getFullYear()}-${month}-${day}`
}



export {convertDateToTxt}