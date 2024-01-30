import { useEffect, useState } from 'react';
import WeatherTopPlace from '../../api/weather/WeatehrGetTopPlace';
import useLoginStore from '../../stores/login/useLoginStore';

export const useWeatherGet = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const [weatherTopPlace, setWeatherTopPlace] = useState<any>();

  useEffect(() => {
    const getTopNotice = async () => {
      const response = await WeatherTopPlace(AccessToken);
      //   console.log(response);
    };
    getTopNotice();
  }, []);

  return { weatherTopPlace };
};
