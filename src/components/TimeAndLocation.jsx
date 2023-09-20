//components
import { Reloj } from "./";

//services
import { formatToLocalTimeWithoutHour } from "../services/weatherService";

const TimeAndLocation = ({
  weather: { dt, timezone, name, country },
  daysToSpanish,
  monthsToSpanish,
}) => {
  //variables
  const currentDay = formatToLocalTimeWithoutHour(dt, timezone).split(" ");
  currentDay[0] = daysToSpanish(currentDay[0]);
  currentDay[2] = monthsToSpanish(currentDay[2]);
  const newCurrentDay = currentDay.join(" ");

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <Reloj newCurrentDay={newCurrentDay} />
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-xl sm:text-3xl font-medium">{`${name} ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
