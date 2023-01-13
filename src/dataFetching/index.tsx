const baseUrl = "http://api.weatherapi.com";

export const fetchCurrent = async (locale: string) => {
  const currentUrl = `${baseUrl}/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locale}&aqi=no`;
  const response = await fetch(currentUrl);
  if (!response.ok) {
    throw new Error("could not fetch current weather");
  }
  return response.json();
};

export const fetchForecast = async (locale: string, days: number) => {
  const forecastUrl = `${baseUrl}/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locale}&days=${days}&aqi=no&alerts=no`;
  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("could not fetch forecast");
  }
  return response.json();
};

export const fetchHistory = async (locale: string, date: Date) => {
  const historyUrl = `${baseUrl}/v1/history.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locale}&dt=${date}`;
  const response = await fetch(historyUrl);
  if (!response.ok) {
    throw new Error(`could not fetch previous weather for ${date}`);
  }
  return response.json();
};
