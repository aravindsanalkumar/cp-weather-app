/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
      method: 'GET',
      headers: {
          'x-rapidapi-key': '728c1dafefmshaece7467d756301p156570jsnb8fdcb59f75c',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
  };

  return fetch(url,options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log(err));
  
}



/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data =  await getWeatherData(city);
  showWeatherData(data);

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES 
  
  console.log(weatherData);

  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
}






const getData = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.main);
    } catch (error) {
        console.error(error);
    }
}

