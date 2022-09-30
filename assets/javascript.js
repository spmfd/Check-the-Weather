const todaycity = document.getElementById('todays-weather-card')
const citySearchBtn = document.getElementById('city-search')

citySearchBtn.addEventListener('click', searchHistory, weather)

// function weather(){
//     let searchInputTxt = document.getElementById('search-input').value.trim();
//     fetch(`api.openweathermap.org/data/2.5/forecast?q=${searchInputTxt}&appid=93ca7c98e96312611f46df22df330813`)
//     .then(response => response.json())
//     .then(data => {
//         let html = "";
//         html += `
                // <h2 id="currentCity">
                // Test Name - Date - Icon
                // </h2>
                // <p>Temperature: °F</p>
                // <p>Wind Speed: MPH</p>
                // <p>Humidity: %</p>
                // </div>
//         `;
//     };
//     todaycity.classList.remove('notFound');
// } else{
//     html = "Sorry, we didn't find a city with that name!";
//     todaycity.classList.add('notFound');
// }

// todaycity.innerHTML = html;
// }

// function 5dayweather(){

// }

