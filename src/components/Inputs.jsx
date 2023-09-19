//react
import { useState } from "react";

//react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//react-unicons
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, setUnits, query, units }) => {
  //state variables
  const [city, setCity] = useState("");

  //functions
  const handleSearchInput = (e) => setCity(e.currentTarget.value);

  const handleSearchClick = () =>
    city.trim().length > 0 ? setQuery({ q: city }) : null;

  const getLocation = async () => {
    try {
      if (!navigator.geolocation) {
        throw new Error(
          "La geolocalización no está disponible en este navegador."
        );
      }

      toast.info("Obteniendo la ubicación del usuario...");
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      toast.success("¡Ubicación conseguida!");

      const { latitude: newLat, longitude: newLon } = position.coords;

      if (newLat !== query.lat || newLon !== query.lon) {
        setQuery({
          lat: newLat,
          lon: newLon,
        });
      }
    } catch (error) {
      toast.error(`Error al obtener la ubicación: ${error.message}`);
    }
  };

  const handleLocationClick = () => {
    getLocation();
  };

  const handleUnitsChange = ({ currentTarget: { name } }) => {
    if (units !== name) setUnits(name);

    const temperatureUnit = name === "metric" ? "°C" : "°F";
    toast.info(`Temperatura en ${temperatureUnit}`);
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center my-6">
      <div className="flex flex-row sm:w-3/4 items-center justify-center mt-5 sm:m-0 space-x-4">
        <input
          type="text"
          placeholder="Buscar por ciudad"
          className="text-md sm:text-xl font-light p-2 w-full outline-none shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-lg"
          value={city}
          onChange={(e) => handleSearchInput(e)}
        />
        <UilSearch
          className="text-white cursor-pointer outline-none transition ease-out hover:scale-125 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
          onClick={handleSearchClick}
        />
      </div>
      <div className="flex flex-row sm:w-1/4 items-center justify-end sm:justify-center space-x-4 text-white">
        <UilLocationPoint
          className="text-white cursor-pointer outline-none transition ease-out hover:scale-125 w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
          onClick={handleLocationClick}
        />
        <button
          name="metric"
          className="text-md sm:text-xl font-light outline-none transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-md sm:text-xl mx-3">|</p>
        <button
          name="imperial"
          className="text-md sm:text-xl font-light outline-none transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
};

export default Inputs;
