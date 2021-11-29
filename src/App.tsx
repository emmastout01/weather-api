import React from "react";
import { Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./routes/Home";
import Forecast from "./routes/Forecast";
import Current from "./routes/Current";
import History from "./routes/History";
import Header from "./components/Header";


const App = () => {
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>A weather app</h1>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forecast/:location" element={<Forecast />} />
          <Route path="current/:location" element={<Current />} />
          <Route path="history/:location" element={<History />} />
        </Routes>
      </QueryClientProvider>
    );
}

export default App;