Weather App

Overview.

The Weather App is a simple web-based application that allows users to fetch real-time weather data for any city. It provides temperature, weather conditions, and additional details like wind speed and humidity. The app is designed to be fully responsive, working seamlessly on mobile, tablet, and desktop devices.

 Key Features

- Search by City Name: Users can enter a city name to retrieve weather information.
- Real-Time Weather Data: Fetches live weather updates using an external API.
- Responsive Design: Works smoothly across different screen sizes.
- Loading Indicator: Displays a loading message while fetching data.
- Error Handling: Shows an error message if the city is not found or the input is empty.

 How It Works


1. Fetching Weather Data.

The app uses avaScript Fetch API to request weather data from Weatheapi.com. When a user enters a city name and clicks the search button:
1. The app constructs an API request URL.
2. The request is sent to Weatheapi.com
3. The response is processed, and key weather details are extracted.
4. The weather details are dynamically displayed on the webpage.

Example API Request:

```javascript
fetch(`https://api.waetherapi.com/data/2.5/weather?q=London&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
```

2. Displaying Weather Data.

- The fetched data is processed and displayed inside a `div` with the ID `weatherResult`.
- The temperature is converted from Kelvin to Celsius before displaying.

Installation & Setup.

1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
2. Install Dependencies.
This project may include a backend (`server.js`), so install dependencies if needed:
```bash
npm install
```

3. Get API Key.

1. Sign up at [weatherapi](https://weatherapi.com/)
2. Generate an API key.
3. Replace `YOUR_API_KEY` in `script.js`:

```javascript
const API_KEY = 'YOUR_API_KEY';
```

4. Run the App

start it:
```bash
node server.js
```
Otherwise, open `index.html` in a browser.

Project Structure
```
weather-app/
.
├── package.json
├── package-lock.json
├── public
│   ├── Images
│   ├── index.html
│   ├── README.md
│   ├── script.js
│   └── styles.css
└── server.js
```

Technologies Used

- Frontend: HTML, CSS, JavaScript.
- Backend : Node.js, Express
- API: weatherapi.com
- Version Control: Git, GitHub

Future Improvements
- Add temperature unit toggle (Celsius/Fahrenheit).
- Implement geolocation support to detect user’s location automatically.
- Enhance UI with animations and better visuals.


 Contributing

Feel free to fork this repository and submit pull requests for improvements!



