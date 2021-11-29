import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QueryObject, ForecastData } from "../../types";
import { fetchForecast } from "../../dataFetching";
import WeatherDay from "../../components/WeatherDay";

const Forecast = () => {
  const { location = "" } = useParams();
  const { data, isError, isFetching }: QueryObject<ForecastData> = useQuery(
    ["forecast", location],
    () => fetchForecast(location, 3)
  );

  if (isError) {
    return <div>Error</div>;
  }

  if (isFetching) {
    return <div>fetching</div>;
  }

  if (data !== undefined) {
    console.log({ data });
    return (
      <>
        <div>Forecast for {data.location.name}, {data.location.region}:</div>
        <hr />
        {data.forecast.forecastday?.map((day) => (
          <>
            <WeatherDay forecast={day} />
            <hr />
          </>
        ))}
      </>
    );
  }

  return null;
};

export default Forecast;
