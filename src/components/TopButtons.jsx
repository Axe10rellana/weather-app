const TopButtons = ({ setQuery }) => {
  //variables
  const cities = [
    {
      id: 1,
      title: "Buenos Aires",
    },
    {
      id: 2,
      title: "Posadas",
    },
    {
      id: 3,
      title: "Mar Del Plata",
    },
    {
      id: 4,
      title: "San Luis",
    },
    {
      id: 5,
      title: "Resistencia",
    },
  ];

  return (
    <div className="hidden sm:flex items-center justify-between my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white sm:text-md font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
