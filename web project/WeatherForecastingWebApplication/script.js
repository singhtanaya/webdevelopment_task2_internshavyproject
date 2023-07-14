window.addEventListener('load', () => {
    const form = document.getElementById('location-form');
    const input = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const city = input.value;
      getWeather(city);
    });
  
    function getWeather(city) {
      const apiKey = 'f0cc4a2e089ea413135b70fe18be187d'; // Replace with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
         // console.log(data)
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const weatherDescription = data.weather[0].description;
  
          weatherInfo.innerHTML = `
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Description: ${weatherDescription}</p>
          `;
        })
        .catch(error => {
          weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
          console.error(error);
        });
    }
  });