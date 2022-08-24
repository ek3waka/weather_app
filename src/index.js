const temp = document.createElement('div')
const body = document.querySelector('body')
body.append(temp)

fetch('http://api.openweathermap.org/data/2.5/weather?lat=59.9386&lon=30.3141&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
            return response.json();
            })
    .then(function(response) {
            console.log(response)
            temp.textContent = `${response.main.feels_like}`
            
            })



