import weatherIcon from "../assets/weather.svg";

const WeatherSVG = () => {
  return (
    <div className="card card-body">
      <img className="weatherSVG" src={weatherIcon} alt="weather SVG" />
    </div>
  );
};

export default WeatherSVG;
