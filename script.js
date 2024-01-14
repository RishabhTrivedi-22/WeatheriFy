const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDet = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIkey = "39dd7def34e740ad85f1f3be0682b261";
  const city = document.querySelector(".search-box input").value;
  
  if (city == '')
    return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {


    if (json.cod == '404') {
      container.style.height = "400px";
      weatherBox.classList.remove("active");
      weatherDet.classList.remove("active");
      error.classList.add("active");
      return;
    } else {
      container.style.height = "600px";
      weatherBox.classList.add("active");
      weatherDet.classList.add("active");
      error.classList.remove("active");
    }



    const image = document.querySelector(".weather-box img");
    const temperature = document.querySelector(".weather-box .temperature");
    const description = document.querySelector(".weather-box .description");
    const humidity = document.querySelector(".weather-details .humidity span");
    const wind = document.querySelector(".weather-details .wind span");

    switch (json.weather[0].main) {

      case 'Clear':
        image.src = "images/clear.png";
        break;

      case 'Rain':
        image.src = "images/light-rain.png";
        break;

      case 'Snow':
        image.src = "images/snow.png";
        break;

      case 'Mist':
        image.src = "images/mist.png";
        break;

      case 'Clouds':
        image.src = "images/cloudy.png";
        break;

      case 'Haze':
        image.src = "images/haze.png";
        break;

      case 'Smoke':
        image.src = "images/smoke.png";
        break;

      case 'Fog':
        image.src = "images/fog.png";
        break;

      default:
        image.src = "images/cloudy.png";
    }

    temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidity.innerHTML = `${json.main.humidity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;

  });


});