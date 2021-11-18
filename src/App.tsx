import React from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Forecast from "./routes/Forecast";
import Current from "./routes/Current";
import History from "./routes/History"


const App = () => {
    return (
      <>
        <div>
          <h1>Hello, world!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forecast/:zipcode" element={<Forecast />} />
          <Route path="current/:zipcode" element={<Current />} />
          <Route path="history/:zipcode" element={<History />} />
        </Routes>
      </>
    );
}

export default App;