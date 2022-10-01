const todaycity = document.getElementById('todays-weather-card')
const citySearchBtn = document.getElementById('city-search')
const forecastcity = document.getElementById('card-container')
const forecastdate = document.getElementById('forecast-date')

citySearchBtn.addEventListener('click', function(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    weather(searchInputTxt)
    forecastweather(searchInputTxt)
})

function weather(searchInputTxt){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813&units=imperial`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        html += `
                <h2 id="currentCity">
                ${searchInputTxt} - ${Date()}- Icon
                </h2>
                <p>Temperature: ${data.main.temp} °F</p>
                <p>Wind Speed: ${data.wind.speed} MPH</p>
                <p>Humidity: ${data.main.humidity} %</p>
                </div>
        `;
        // console.log(data.weather)
        todaycity.innerHTML = html;
        });
};
    

function forecastweather(searchInputTxt){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813&units=imperial`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        for(let i =0; i < data.list.length; i++){
        html += `
        <div class="future-card">
                    <h3 id="forecast-date"></h3>
                    <p></p>
                    <p>Icon Image Here :)</p>
                    <p>Temperature: ${data.list[i].main.temp} °F</p>
                    <p>Wind Speed: ${data.list[i].wind.speed} MPH</p>
                    <p>Humidity: ${data.list[i].main.humidity} %</p>
        </div>
        `;
        var time = data.list[i].dt;
        function milliseconds () {
                var date = new Date(time)
                forecastdate.innerHTML = date.toString();
        }
        forecastcity.innerHTML = html;
        }})
        milliseconds()
}
