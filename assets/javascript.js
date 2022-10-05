const todaycity = document.getElementById('todays-weather-card')
const citySearchBtn = document.getElementById('city-search')
const forecastcity = document.getElementById('card-container')
const forecastdate = document.getElementById('forecast-date')

citySearchBtn.addEventListener('click', function(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    weather(searchInputTxt)
    forecastweather(searchInputTxt)
    searchhistory(searchInputTxt)
})

function weather(searchInputTxt){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813&units=imperial`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        html += `
                <h2 id="currentCity">
                ${searchInputTxt} - ${moment().format('MMM Do YY')}- <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                </h2>
                <p>Temperature: ${data.main.temp} °F</p>
                <p>Wind Speed: ${data.wind.speed} MPH</p>
                <p>Humidity: ${data.main.humidity} %</p>
                </div>
        `;
        // console.log(data.weather[0].icon)
        todaycity.innerHTML = html;
        });
};
    

function forecastweather(searchInputTxt){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813&units=imperial`)
    .then(response => response.json())
    .then(data => {
        let html = "";
             html += `
        <div class="future-card">
                    <h3 id="forecast-date">${moment().add(1, 'days').format('MMM Do YY')}</h3>
                    <p></p>
                    <p><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png"></p>
                    <p>Temperature: ${data.list[0].main.temp} °F</p>
                    <p>Wind Speed: ${data.list[0].wind.speed} MPH</p>
                    <p>Humidity: ${data.list[0].main.humidity} %</p>
        </div>
        <div class="future-card">
                <h3 id="forecast-date">${moment().add(2, 'days').format('MMM Do YY')}</h3>
                <p></p>
                <p><img src="https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png"></p>
                <p>Temperature: ${data.list[1].main.temp} °F</p>
                <p>Wind Speed: ${data.list[1].wind.speed} MPH</p>
                <p>Humidity: ${data.list[1].main.humidity} %</p>
        </div>
        <div class="future-card">
                <h3 id="forecast-date">${moment().add(3, 'days').format('MMM Do YY')}</h3>
                <p></p>
                <p><img src="https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png"></p>
                <p>Temperature: ${data.list[2].main.temp} °F</p>
                <p>Wind Speed: ${data.list[2].wind.speed} MPH</p>
                <p>Humidity: ${data.list[2].main.humidity} %</p>
        </div>
        <div class="future-card">
                <h3 id="forecast-date">${moment().add(4, 'days').format('MMM Do YY')}</h3>
                <p></p>
                <p><img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png"></p>
                <p>Temperature: ${data.list[3].main.temp} °F</p>
                <p>Wind Speed: ${data.list[3].wind.speed} MPH</p>
                <p>Humidity: ${data.list[3].main.humidity} %</p>
        </div>
        <div class="future-card">
                <h3 id="forecast-date">${moment().add(5, 'days').format('MMM Do YY')}</h3>
                <p></p>
                <p><img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png"></p>
                <p>Temperature: ${data.list[4].main.temp} °F</p>
                <p>Wind Speed: ${data.list[4].wind.speed} MPH</p>
                <p>Humidity: ${data.list[4].main.humidity} %</p>
        </div>
        `;
            forecastcity.innerHTML = html;
        })
}

function searchhistory(searchInputTxt){
    localStorage.setItem("search", searchInputTxt);
    document.getElementById("previous-search").innerHTML = localStorage.getItem("search");
}