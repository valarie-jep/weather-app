const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

// Ensure node-fetch works in CommonJS
const fetch = (...args) => import("node-fetch").then(mod => mod.default(...args));


const app = express();
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_URL = "http://api.weatherapi.com/v1/current.json";

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Weather API Proxy Route
app.get("/weather", async (req, res) => {
    const { city } = req.query;
    if (!city) {
        return res.status(400).json({ error: "City parameter is required" });
    }
    try {
        const response = await fetch(`${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${city}&aqi=no`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
