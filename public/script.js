document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("cityInput");
    const searchBtn = document.getElementById("searchBtn");
    const weatherDisplay = document.getElementById("weatherResult");

    searchBtn.addEventListener("click", async () => {
        const city = input.value.trim();
        if (!city) {
            alert("Please enter a city name.");
            return;
        }
        fetchWeather(city);
    });

    async function fetchWeather(city) {
        try {
            const response = await fetch(`http://localhost:3000/weather?city=${city}`);

            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherDisplay.innerHTML = "<p>Could not retrieve weather data. Please try again.</p>";
        }
    }

    function displayWeather(data) {
        if (data.error) {
            weatherDisplay.innerHTML = `<p>Error: ${data.error.message}</p>`;
            return;
        }

        const { location, current } = data;
        weatherDisplay.innerHTML = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <p><strong>Temperature:</strong> ${current.temp_c}°C (${current.temp_f}°F)</p>
            <p><strong>Condition:</strong> ${current.condition.text}</p>
            <img src="${current.condition.icon}" alt="Weather Icon">
            <p><strong>Humidity:</strong> ${current.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${current.wind_kph} kph</p>
        `;
    }
});
