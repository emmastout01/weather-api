import React from "react";
import { useParams } from "react-router-dom";

const Forecast = () => {
    const params = useParams();

    return <div>Forecast {params.zipcode}</div>;
};

export default Forecast;
