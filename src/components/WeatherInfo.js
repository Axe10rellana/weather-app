import locationIcon from "../assets/location.png";
import temperatureIcon from "../assets/temperature.jpg";
import humidityIcon from "../assets/humidity.jpg";
import wind_speedIcon from "../assets/wind_speed.png";

const WeatherInfo = ({
  city,
  country,
  temperature,
  description,
  humidity,
  wind_speed,
  error,
}) => {
  return (
    <div>
      {error && (
        <div className="alert alert-danger text-danger text-center">
          <p>{error}</p>
        </div>
      )}
      {temperature ? (
        <div className="card card-body bg-primary text-white">
          <p>
            <img className="image" src={locationIcon} alt={city} />
            <b className="ml-3">
              Localización: {city}, {country}
            </b>
          </p>
          <p>
            <img className="image" src={temperatureIcon} alt={temperature} />
            <b className="ml-3">
              Temperatura: {temperature}°C Descripción: {description}
            </b>
          </p>
          <p>
            <img className="image" src={humidityIcon} alt={humidity} />
            <b className="ml-3">Humedad: {humidity}%</b>
          </p>
          <p>
            <img className="image" src={wind_speedIcon} alt={wind_speed} />
            <b className="ml-3">Velocidad del viento: {wind_speed}m/s</b>
          </p>
        </div>
      ) : (
        <div className="card card-body bg-primary text-white">
          <b className="ml-3">Todavia no hay ninguna petición</b>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
