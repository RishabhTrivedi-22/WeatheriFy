const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDet = document.querySelector(".weather-details");
const error = document.querySelector(".not-found");
const cityHide = document.querySelector(".city-hide");

search.addEventListener("click", () => {
  const APIkey = "39dd7def34e740ad85f1f3be0682b261";
  const city = document.querySelector(".search-box input").value;

  if (city == '')
    return;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {


    if (json.cod == '404') {
      cityHide.textContent = city;
      container.style.height = "400px";
      weatherBox.classList.remove("active");
      weatherDet.classList.remove("active");
      error.classList.add("active");
      return;
    }



    const image = document.querySelector(".weather-box img");
    const temperature = document.querySelector(".weather-box .temperature");
    const description = document.querySelector(".weather-box .description");
    const humidity = document.querySelector(".weather-details .humidity span");
    const wind = document.querySelector(".weather-details .wind span");


    if (cityHide.textContent == city) {
      return;
    } else {
      cityHide.textContent = city;
      container.style.height = "600px";
      container.classList.add("active");
      weatherBox.classList.add("active");
      weatherDet.classList.add("active");
      error.classList.remove("active");

      setTimeout(() => {
        container.classList.remove("active");
      }, 2500);

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

      const infoWeather = document.querySelector(".info-weather");
      const infoHumidity = document.querySelector(".info-humidity");
      const infoWind = document.querySelector(".info-wind");

      const elCloneInfoWeather = infoWeather.cloneNode(true);
      const elCloneInfoHumidity = infoHumidity.cloneNode(true);
      const elCloneInfoWind = infoWind.cloneNode(true);

      elCloneInfoWeather.id = "clone-info-weather";
      elCloneInfoWeather.classList.add("active-clone");

      elCloneInfoHumidity.id = "clone-info-humidity";
      elCloneInfoHumidity.classList.add("active-clone");

      elCloneInfoWind.id = "clone-info-wind";
      elCloneInfoWind.classList.add("active-clone");

      setTimeout(() => {
        infoWeather.insertAdjacentElement("afterend", elCloneInfoWeather);
        infoHumidity.insertAdjacentElement("afterend", elCloneInfoHumidity);
        infoWind.insertAdjacentElement("afterend", elCloneInfoWind);
      }, 2200);


      const cloneInfoWeather = document.querySelectorAll(".info-weather.active-clone");
      const totalCLoneInfoWeather = cloneInfoWeather.length;
      const cloneInfoWeatherFirst = cloneInfoWeather[0];

      const cloneInfoHumidity = document.querySelectorAll(".info-humidity.active-clone");
      const cloneInfoHumidityFirst = cloneInfoHumidity[0];

      const cloneInfoWind = document.querySelectorAll(".info-wind.active-clone");
      const cloneInfoWindFirst = cloneInfoWind[0];

      if (totalCLoneInfoWeather > 0) {
        cloneInfoWeatherFirst.classList.remove("active-clone");
        cloneInfoHumidityFirst.classList.remove("active-clone");
        cloneInfoWindFirst.classList.remove("active-clone");

        setTimeout(() => {
          cloneInfoWeatherFirst.remove();
          cloneInfoHumidityFirst.remove();
          cloneInfoWindFirst.remove();
        }, 2200);
      }



    }



  });


});