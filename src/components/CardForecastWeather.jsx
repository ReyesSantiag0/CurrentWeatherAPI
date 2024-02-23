/* eslint-disable react/prop-types */
export const CardForecastWeather = ({ cityWeatherForecastData }) => {
  return (
    <>
      {cityWeatherForecastData.map((city) => (
        <div
          key={city.dt}
          className="card my-3 border-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white" }}
        >
          <div className="card-body">
            <h5 className="card-title">Fecha</h5>
            <h1>{city.temp}</h1>
            <p className="card-text">Clima</p>
          </div>
        </div>
      ))}
    </>
  );
};
