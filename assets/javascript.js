const todaycity = document.getElementById('todays-weather-card')
const citySearchBtn = document.getElementById('city-search')
const forecastcity = document.getElementById('card-container')
const forecastdate = document.getElementById('forecast-date')
const clearhist = document.getElementById('clear')

citySearchBtn.addEventListener('click', function () {
        let searchInputTxt = document.getElementById('search-input').value.trim();
        weather(searchInputTxt)
        forecastweather(searchInputTxt)
        searchhistory(searchInputTxt)
})

function prevcitySearch(event) {
        console.log(event.target.textContent)
        let searchcity = event.target.textContent;
        weather(searchcity)
        forecastweather(searchcity)
}

clearhist.addEventListener('click',function(){
         localStorage.removeItem("city")
         document.getElementById("previous-search").innerHTML =""
})

function weather(searchInputTxt) {
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
                        let search = JSON.parse(localStorage.getItem("city")) || []
                        if (search.indexOf(searchInputTxt) === -1) {
                                search.push(searchInputTxt)
                                localStorage.setItem("city", JSON.stringify(search))
                                displaycity()
                        }
                });

};

displaycity()
function forecastweather(searchInputTxt) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813&units=imperial`)
                .then(response => response.json())
                .then(data => {
                        let html = "";
                        let t=1; 
                        for(let i=0;i<data.list.length;i=i+8){
                        html += `
        <div class="future-card">
                    <h3 id="forecast-date">${moment().add(t, 'days').format('MMM Do YY')}</h3>
                    <p></p>
                    <p><img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png"></p>
                    <p>Temperature: ${data.list[i].main.temp} °F</p>
                    <p>Wind Speed: ${data.list[i].wind.speed} MPH</p>
                    <p>Humidity: ${data.list[i].main.humidity} %</p>
        </div>`
                   t++;     
        ;}
                        forecastcity.innerHTML = html;
                })
}

function displaycity() {
        let search = JSON.parse(localStorage.getItem("city")) || []
        let htmlCode = ""
        for (let i = 0; i < search.length; i++) {
                htmlCode += `<li><button class="search">${search[i]}</button></li>`
        }
        document.getElementById("previous-search").innerHTML = htmlCode;
        let searchButtons = document.querySelectorAll(".search")
        searchButtons.forEach(element => element.addEventListener("click", prevcitySearch))
}

