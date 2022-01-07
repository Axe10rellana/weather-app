import React, { Component } from "react";
import Header from "./components/Header";
import WeatherSVG from "./components/WeatherSVG";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    let cityValue = city.value;
    let countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      cityValue = data.name;

      if (!cityValue) {
        this.setState({
          error: "La ciudad no se encuentra en la base de datos de la API",
        });
        console.clear();
        setTimeout(() => {
          this.setState({
            error: null,
          });
        }, 2000);
      } else {
        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          error: null,
        });
      }
    } else {
      this.setState({
        error: "Porfavor escribi una ciudad y un pais",
      });
      setTimeout(() => {
        this.setState({
          error: null,
        });
      }, 2000);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <WeatherSVG />
              <WeatherForm getWeather={this.getWeather} />
              <WeatherInfo {...this.state} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
