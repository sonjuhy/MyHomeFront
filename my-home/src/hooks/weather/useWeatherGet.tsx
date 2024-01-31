import { useEffect, useState } from 'react';
import WeatherCurrentInfo from '../../api/weather/WeatehrGetCurrentInfo';
import useLoginStore from '../../stores/login/useLoginStore';
import useLocationGetHook from './useLocationGetHook';

export const useWeatherGet = () => {
  const AccessToken = useLoginStore((state: any) => state.AccessToken);
  const { latitude, longitude, error } = useLocationGetHook();

  const [weatherCurrentInfo, setWeatherCurrentInfo] = useState<any>();

  useEffect(() => {
    const getWeatherCurrentInfo = async () => {
      if (latitude) {
        const response = await WeatherCurrentInfo(latitude, longitude, AccessToken);
        console.log(response);
      }
    };
    getWeatherCurrentInfo();
  }, [latitude]);

  return { weatherCurrentInfo };
};
