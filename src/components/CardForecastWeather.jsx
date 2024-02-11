export const CardForecastWeather = () => {
  return (
    <>
      <div
        className="card my-3 border-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title">Fecha</h5>
          <h1>Ciudad</h1>
          <p className="card-text">Clima</p>
        </div>
      </div>
    </>
  );
};
