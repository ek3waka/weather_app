/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLHlCQUF5QjtBQUMzRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5ib2R5LmFwcGVuZCh0ZW1wKVxyXG5cclxuZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PTU5LjkzODYmbG9uPTMwLjMxNDEmYXBwaWQ9NWVmY2QxNmViZDJhNTYwNWE4YmViZDIxMzk3ZjMxN2UmdW5pdHM9bWV0cmljJywge1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAke3Jlc3BvbnNlLm1haW4uZmVlbHNfbGlrZX1gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=