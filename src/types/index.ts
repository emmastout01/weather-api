interface Astro {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: Condition;
  code: number;
  icon: string;
  text: string;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  uv: number;
}

interface Hour {
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: Condition;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  time: Date;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

export interface ForecastDay {
  date: Date;
  date_epoch: number;
  astro: Astro;
  day: Day;
  hour: Hour[];
}

interface Location {
  country: string;
  lat: number;
  localtime: Date;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

export interface ForecastData {
  current: any;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: Location;
}

export interface QueryObject<T> {
    isFetching: boolean;
    isError: boolean;
    data: T | undefined;
}