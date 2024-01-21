import { useEffect, useState } from 'react';
import WeatherTopPlace from '../../api/weather/WeatehrGetTopPlace';

export const useWeatherGet = () => {
  const [weatherTopPlace, setWeatherTopPlace] = useState<any>();

  useEffect(() => {
    const getTopNotice = async () => {
      const response = await WeatherTopPlace();
      //   console.log(response);
    };
    getTopNotice();
  }, []);

  return { weatherTopPlace };
};
