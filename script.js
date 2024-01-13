const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDet = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const APIKey = '59cade2bb32aeb94a8078eda3cd2bbab';
  const city = document.querySelector('.search-box input');

  if (city == '')
    return;
  fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${APIKey}').then(response => response.json()).then(json => {


    const image = document.querySelector('.weather img');
    const temperature = document.querySelector('.weather-box .temperature');
    const description = document.querySelector('.weather-box .description');
    const humidity = document.querySelector('.weather-details .humidity span');
    const wind = document.querySelector('.weather-details .wind span');

    switch (json.weather[0].main) {

      case 'Clear':
        image.src = '/Images/clear.png';
        break;

      case 'Rain':
        image.src = '/Images/rain.png';
        break;

      case 'Snow':
        image.src = '/Images/snow.png';
        break;

      case 'Mist':
        image.src = '/Images/mist.png';
        break;

      case 'Clouds':
        image.src = '/Images/cloudy.png';
        break;

      case 'Haze':
        image.src = '/Images/mist.png';
        break;

      default:
        image.src = '/Images/mist.png';
    }

  });


});