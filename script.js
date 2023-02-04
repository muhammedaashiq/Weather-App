let weather = {
    "apiKey": "392d1b58a2e2e92fbf0ee16a30ef7a23",
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: async function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.getElementById("city").innerHTML = "Weather in " + name;
        document.getElementById("icon").src = await "https://openweathermap.org/img/wn/" + icon + ".png"
        document.getElementById("temp").innerHTML = temp + "°C";
        document.getElementById("desc").innerHTML = description;
        document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
        document.getElementById("wind").innerHTML = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.background = "url('https://source.unsplash.com/1600x900/?" + name + "')";     // to get the background image similar to search
    },
    search: function () {
        this.fetchWeather(document.getElementById("search-bar").value);
    }
}

document.getElementById("button").addEventListener("click", () => weather.search())

document.getElementById("search-bar").addEventListener("keyup", (e) => (e.key == "Enter") ? weather.search():null);

weather.fetchWeather("Republic of India");
