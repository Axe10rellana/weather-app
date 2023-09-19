//react
import { useEffect, useState } from "react";

//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import {
  Forecast,
  Inputs,
  TemperatureAndDetails,
  TimeAndLocation,
  TopButtons,
} from "./components";

//services
import getFormattedWeatherData from "./services/weatherService";

//assets
import loader from "./assets/icons/loader.svg";

const App = () => {
  //state variables
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({ q: "Buenos Aires" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  //useEffect
  useEffect(() => {
    const message = query.q ? query.q : "ubicación actual.";
    const successMessage = `Se ha encontrado el tiempo en %s correctamente.`;
    const errorMessage = "Error al obtener los datos meteorológicos:";
    toast.info(`El tiempo en ${message}`);

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const data = await getFormattedWeatherData({ ...query, units });
        const successMessageFormatted = successMessage.replace(
          "%s",
          `${data.name}, ${data.country}`
        );
        toast.success(successMessageFormatted);
        setWeather(data);
      } catch (error) {
        toast.error(`${errorMessage} ${error}`);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [query, units]);

  //functions
  const formatBackground = () => {
    const defaultBackground = "from-cyan-700 to-blue-700";
    if (!weather) return defaultBackground;
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return defaultBackground;

    return "from-yellow-700 to-orange-700";
  };

  const daysToSpanish = (day) => {
    const daysOfWeek = {
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miercoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sabado",
      Sunday: "Domingo",
    };

    return daysOfWeek[day] || day;
  };

  const monthsToSpanish = (month) => {
    const monthsOfYear = {
      Jan: "Ene",
      Feb: "Feb",
      Mar: "Mar",
      Apr: "Abr",
      May: "May",
      Jun: "Jun",
      Jul: "Jul",
      Aug: "Ago",
      Sep: "Sep",
      Oct: "Oct",
      Nov: "Nov",
      Dec: "Dic",
    };

    return monthsOfYear[month] || month;
  };

  const daysForecastToSpanish = (day) => {
    const daysOfWeek = {
      Mon: "Lun",
      Tue: "Mar",
      Wed: "Mie",
      Thu: "Jue",
      Fri: "Vie",
      Sat: "Sab",
      Sun: "Dom",
    };

    return daysOfWeek[day] || day;
  };

  return (
    <div
      className={`mx-auto max-w-screen-lg py-5 px-5 sm:px-10 lg:px-20 bg-gradient-to-br md:h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs
        setQuery={setQuery}
        setUnits={setUnits}
        query={query}
        units={units}
      />

      {loading && (
        <div className="flex items-center justify-center">
          <img
            className="w-[40px] sm:w-[60px] pointer-events-none"
            src={loader}
            alt="Cargando..."
          />
        </div>
      )}

      {weather && !loading && (
        <div>
          <TimeAndLocation
            weather={weather}
            daysToSpanish={daysToSpanish}
            monthsToSpanish={monthsToSpanish}
          />
          <TemperatureAndDetails weather={weather} />
          <Forecast
            title="pronostico por hora"
            items={weather.hourly}
            daysForecastToSpanish={daysForecastToSpanish}
          />
          <Forecast
            title="pronostico por días"
            items={weather.daily}
            daysForecastToSpanish={daysForecastToSpanish}
          />
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default App;
