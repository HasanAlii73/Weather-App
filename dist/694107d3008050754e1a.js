import './styles.css'
import './imgs/circle.png'

// Webpack will bundle all images from the folder
function importAll(r) {
  let images = {}
  r.keys().forEach(item => { images[item.replace('./', '')] = r(item) })
  return images
}
const images = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/))

const apiKey = '4Z97WK7WKB5ECZ9DTRVM2SLUT'

document.addEventListener('DOMContentLoaded', function () {
  const citySearchBar = document.getElementById('cityInput')
  const submitButton = document.getElementById('searchBtn')
  const unitSwitch = document.getElementById('unitSwitch')
  document.getElementById('todaysDate').innerHTML = new Date().toDateString()
  const currentTemp = document.getElementById('currentTemp')
  const currnetCondition = document.getElementById('currnetCondition')
  const mainForcast = document.getElementById('mainForcast')
  const fiveDayForcast = document.getElementById('fiveDayForcast')
  const weatherDetails = document.getElementById('weatherDetails')
  const celsiusLabel = document.getElementById('celsiusLabel');
  const fahrenheitLabel = document.getElementById('fahrenheitLabel')
  const loading = document.getElementById('loading')
  const cityTitle = this.getElementById('cityTitle')

  async function fetchWeather(city, unitGroup) {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=${apiKey}&contentType=json`)
      if (!response.ok) {
        throw new Error('HTTP error! status: ' + response.status)
      }
      const data = await response.json()
      console.log(data)
      return data
    }
    catch (error) {
      console.error('Error fetching weather data:', error)
      return null
    }
  }

  function setConditionImage(condition, dayIndex) {
    const imgElements = document.getElementsByClassName(`day${dayIndex}Img`);
    if (imgElements.length === 0) return; // No such element

    let imgSrc = images['clear.png'];
    if (condition.conditions === 'cloud')
      imgSrc = images['cloud.png'];
    else if (condition.conditions === "Partially cloudy")
      imgSrc = images['partiallyCloudy.png'];
    else if (condition.conditions === "Overcast")
      imgSrc = images['cloud.png'];
    else if (condition.conditions === "Rain" || condition.conditions === "Rain, Partially cloudy" || condition.conditions === "Rain, Overcast")
      imgSrc = images['rain.png'];
    else if (condition.conditions === "Clear" || condition.conditions === "Sunny")
      imgSrc = images['clear.png'];
    else if (condition.conditions === "Snow" || condition.conditions === "Snow, Partially cloudy" || condition.conditions === "Snow, Overcast")
      imgSrc = images['snow.png'];
    else if (condition.conditions === "Fog" || condition.conditions === "Fog, Partially cloudy" || condition.conditions === "Fog, Overcast")
      imgSrc = images['fog.png'];
    else
      imgSrc = images['clear.png'];

    imgElements[0].src = imgSrc; // Set the src of the first matching element
  }

  submitButton.addEventListener('click', () => {
    if (citySearchBar.value.trim() === '') return
    submitButton.disabled = true;
    submitButton.classList.add('disabled')

    loading.style.display = 'block'

    const city = citySearchBar.value
    let unit = ''
    if (unitSwitch.checked) {
      unit = 'metric'
    }
    else {
      unit = 'us'
    }
    fetchWeather(city, unit).then(data => {
      loading.style.display = 'none'
      if (data) {
        renderElements(data, unit)
      } else {
        console.log('Could not retrieve weather data.')
      }
      submitButton.disabled = citySearchBar.value.trim() === ''
    })
  })

  unitSwitch.addEventListener('change', () => {
    let city = citySearchBar.value
    if (city.trim() === '') city = 'latakia'
    let unit = ''
    if (unitSwitch.checked) {
      unit = 'metric'
      fahrenheitLabel.classList.remove('active');
      celsiusLabel.classList.add('active');
    }
    else {
      unit = 'us'
      fahrenheitLabel.classList.add('active');
      celsiusLabel.classList.remove('active');
    }
    fetchWeather(city, unit).then(data => {
      if (data) {
        renderElements(data, unit)
      } else {
        console.log('Could not retrieve weather data.')
      }
    })
  })

  function renderElements(data, unit) {
    mainForcast.innerHTML = `
                    <h2 id="cityTitle">${citySearchBar.value}</h2>
                    <h4 id="todaysDate">${new Date().toDateString()}</h4>
                    <p id="currentTemp">${data.currentConditions.temp}${unit === 'metric' ? '°C' : '°F'}</p>
                    <p id="currnetCondition">${data.currentConditions.conditions}</p>
                    <div id="currentOthers">
                      <div class="feelsLike othersElement">
                        <img src="${images['science.png']}" alt="feelslike" class="icon" />
                        <span class="label">Feels Like</span>
                        <span class="value">${data.currentConditions.feelslike}</span>
                      </div>
                      <div class="humidity othersElement">
                        <img src="${images['water.png']}" alt="feelslike" class="icon" />
                        <span class="label">Humidity</span>
                        <span class="value">${data.currentConditions.humidity}</span>
                      </div>
                      <div class="windSpeed othersElement">
                        <img src="${images['direction.png']}" alt="feelslike" class="icon" />
                        <span class="label">Wind Speed</span>
                        <span class="value">${data.currentConditions.windspeed}</span>
                      </div>
                      <div class="pressure othersElement">
                        <img src="${images['hussicane.png']}" alt="feelslike" class="icon" />
                        <span class="label">Pressure</span>
                        <span class="value">${data.currentConditions.pressure}</span>
                      </div>
                      <div class="UVIndex othersElement">
                        <img src="${images['science.png']}" alt="feelslike" class="icon" />
                        <span class="label">UV Index</span>
                        <span class="value">${data.currentConditions.uvindex}</span>
                      </div>
                      <div class="visibility othersElement">
                        <img src="${images['circle.png']}" alt="feelslike" class="icon" />
                        <span class="label">Visibility</span>
                        <span class="value">${data.currentConditions.visibility}</span>
                      </div>
                    </div>`

    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    fiveDayForcast.innerHTML = `
            <div class="dayForcast day1">
              <span class="day">${dayName[new Date(data.days[1].datetime).getDay()]}</span>
              <img class="dayImg day1Img" src="" alt="">
              <span class="temp">${data.days[1].temp}</span>
              <span class="condition">${data.days[1].conditions}</span>
              <span class="highLow">L:${data.days[1].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[1].tempmax}</span>
            </div>
            <div class="dayForcast day2">
              <span class="day">${dayName[new Date(data.days[2].datetime).getDay()]}</span>
              <img class="dayImg day2Img" src="" alt="">
              <span class="temp">${data.days[2].temp}</span>
              <span class="condition">${data.days[2].conditions}</span>
              <span class="highLow">L:${data.days[2].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[2].tempmax}</span>
            </div>
            <div class="dayForcast day3">
              <span class="day">${dayName[new Date(data.days[3].datetime).getDay()]}</span>
              <img class="dayImg day3Img" src="" alt="">
              <span class="temp">${data.days[3].temp}</span>
              <span class="condition">${data.days[3].conditions}</span>
              <span class="highLow">L:${data.days[3].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[3].tempmax}</span>
            </div>
            <div class="dayForcast day4">
              <span class="day">${dayName[new Date(data.days[4].datetime).getDay()]}</span>
              <img class="dayImg day4Img" src="" alt="">
              <span class="temp">${data.days[4].temp}</span>
              <span class="condition">${data.days[4].conditions}</span>
              <span class="highLow">L:${data.days[4].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[4].tempmax}</span>
            </div>
            <div class="dayForcast day5">
              <span class="day">${dayName[new Date(data.days[5].datetime).getDay()]}</span>
              <img class="dayImg day5Img" src="" alt="">
              <span class="temp">${data.days[5].temp}</span>
              <span class="condition">${data.days[5].conditions}</span>
              <span class="highLow">L:${data.days[5].tempmin}&nbsp;&nbsp;&nbsp;H:${data.days[5].tempmax}</span>
            </div>`

    for (let i = 1; i <= 5; i++) {
      setConditionImage(data.days[i], i)
    }

    weatherDetails.innerHTML = `
            <div class="sunrise weatherDetail">
                <img src="${images['sun.png']}" alt="">
                <span>Sunrise</span>
                <span>${data.currentConditions.sunrise}</span>
            </div>
            <div class="sunset weatherDetail">
                <img src="${images['down.png']}" alt="">
                <span>Sunset</span>
                <span>${data.currentConditions.sunset}</span>
            </div>
            <div class="chanceOfRain weatherDetail">
                <img src="${images['rain.png']}" alt="">
                <span>Chance Of Rain</span>
                <span>${data.currentConditions.precipprob}%</span>
            </div>
            <div class="cloudCover weatherDetail">
                <img src="${images['cloud.png']}" alt="">
                <span>Cloud Cover</span>
                <span>${data.currentConditions.cloudcover}%</span>
            </div>`
  }

  fetchWeather('latakia', 'metric').then(data => {
      if (data) {
        renderElements(data, 'metric')
        document.getElementById('cityTitle').textContent = 'Latakia'

      } else {
        console.log('Could not retrieve weather data.')
      }
    })
})