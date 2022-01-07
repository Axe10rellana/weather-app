const WeatherForm = ({ getWeather }) => {
  return (
    <div className="card card-body">
      <form onSubmit={getWeather}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="Nombre De Tu Ciudad: Por Ej Buenos Aires"
            className="form-control"
            autoComplete="off"
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Nombre De Tu Pais: Por Ej AR"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <button className="btn btn-success btn-block">obtener clima</button>
      </form>
    </div>
  );
};

export default WeatherForm;
