//react
import { useEffect, useState } from "react";

const Reloj = ({ newCurrentDay }) => {
  //functions
  const obtenerHoraConAMPM = () => {
    const fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm = "AM";

    if (horas >= 12) {
      ampm = "PM";
      if (horas > 12) {
        horas -= 12;
      }
    }

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    return `${horas}:${minutos}:${segundos} ${ampm}`;
  };

  const obtenerZonaHoraria = () => {
    const fecha = new Date();
    const zonaHoraria = fecha
      .toLocaleTimeString(undefined, { timeZoneName: "short" })
      .split(" ")[2];
    return zonaHoraria;
  };

  //state variables
  const [horaConAMPM, setHoraConAMPM] = useState(obtenerHoraConAMPM());
  const [zonaHoraria, setZonaHoraria] = useState(obtenerZonaHoraria());

  //useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraConAMPM(obtenerHoraConAMPM());
      setZonaHoraria(obtenerZonaHoraria());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="text-white text-sm sm:text-xl font-extralight">
      {newCurrentDay} Hora local: {horaConAMPM} {zonaHoraria}
    </p>
  );
};

export default Reloj;
