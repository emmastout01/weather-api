import React from "react";
import {ForecastDay} from "../../types";

interface Props {
    forecast: ForecastDay;
}

const WeatherDay = ({ forecast }: Props) => {
  return (
    <>
    <div>Date: {forecast.date}</div>
      
      <div>High: {forecast.day.maxtemp_f} degrees F</div>
      <div>Low: {forecast?.day.mintemp_f} degrees F</div>
    </>
  );
};
export default WeatherDay;