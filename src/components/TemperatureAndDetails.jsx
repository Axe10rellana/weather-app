//services
import { iconUrlFromCode, formatToLocalTime } from "../services/weatherService";

//react-unicons
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  //functions
  const weatherConditionsToSpanish = (weather) => {
    const weatherConditions = {
      Clear: "Despejado",
      Clouds: "Nubes",
      Mist: "Niebla",
      Smoke: "Humo",
      Haze: "Haze",
      Dust: "Polvo",
      Fog: "Niebla",
      Sand: "Arena",
      Ash: "Ceniza",
      Squall: "Borrasca",
      Tornado: "Tornado",
      Snow: "Nieve",
      Rain: "Lluvia",
      Drizzle: "Llovizna",
      Thunderstorm: "Tormenta eléctrica",
    };

    return weatherConditions[weather] || weather;
  };

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-md sm:text-xl text-cyan-300">
        <p>{weatherConditionsToSpanish(details)}</p>
      </div>

      <div className="flex gap-y-2 sm:gap-0 flex-col sm:flex-row items-center justify-between md:justify-around mb-4 sm:m-0 py-3 text-white">
        <img
          className="w-40 pointer-events-none"
          src={iconUrlFromCode(icon)}
          alt="weather-img"
        />
        <p className="text-3xl sm:text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-4 sm:space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <UilTemperature className="mr-1" />
            Sensación termica:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilTear className="mr-1" />
            Humedad:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilWind className="mr-1" />
            Viento:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between md:justify-around space-x-1 sm:space-x-2 text-white text-xs sm:text-sm py-3">
        <UilSun className="mr-1 sm:w-[18px] sm:h-[18px]" />
        <p className="font-light">
          Amanecer:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset className="mr-1 sm:w-[18px] sm:h-[18px]" />
        <p className="font-light">
          Atardecer:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>

        <p className="font-light">|</p>

        <UilArrowUp className="mr-1 sm:w-[18px] sm:h-[18px]" />
        <p className="font-light">
          Maxima:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown className="mr-1 sm:w-[18px] sm:h-[18px]" />
        <p className="font-light">
          Minima:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
