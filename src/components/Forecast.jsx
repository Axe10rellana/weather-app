//services
import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title, items, daysForecastToSpanish }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="py-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-xs sm:text-sm">
              {daysForecastToSpanish(item.title)}
            </p>
            <img
              className="w-12 my-1 pointer-events-none"
              src={iconUrlFromCode(item.icon)}
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
