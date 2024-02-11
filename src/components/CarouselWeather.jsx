import modalImage from "../assets/modalImage.jpg";
import { CardForecastWeather } from "./CardForecastWeather";

export const CarouselWeather = () => {
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "500px", position: "relative" }}
      >
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active background-image"
              style={{ backgroundImage: `url(${modalImage})` }}
            >
              <div className="container text-center">
                <div className="row align-items-start">
                  <div className="col">
                    <CardForecastWeather />
                  </div>
                  <div className="col">
                    <CardForecastWeather />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
