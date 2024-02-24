import { Navigate, Route, Routes } from "react-router-dom";
import { HeaderWeather } from "../components/HeaderWeather";
import { FooterWeather } from "../components/FooterWeather";
import { HomeWeather } from "../pages/HomeWeather";

export const RoutesWeather = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <HeaderWeather />
            <Routes>
              <Route index element={<HomeWeather />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <FooterWeather />
          </>
        }
      />
    </Routes>
  );
};
