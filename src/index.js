import './style.css'
import Magnifier from './Icons/magnify.svg'

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




fetch('http://api.openweathermap.org/data/2.5/weather?lat=59.9386&lon=30.3141&appid=5efcd16ebd2a5605a8bebd21397f317e&units=metric', {
    })
    .then(function(response) {
            return response.json();
            })
    .then(function(response) {
            console.log(response)
            
            
            })





