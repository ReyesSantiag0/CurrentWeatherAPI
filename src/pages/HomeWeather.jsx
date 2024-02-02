import { CardForecastWeather } from "../components/CardForecastWeather";
import { CardInformationWeather } from "../components/CardInformationWeather";
import { InputSearchWeather } from "../components/InputSearchWeather";

export const HomeWeather = () => {
  return (
    <>
      <InputSearchWeather />
      <CardInformationWeather />
      <CardForecastWeather />
    </>
  );
};
