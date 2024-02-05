import serverAxios from '../api';

const WeatherCurrentInfo = async (lat: number, lon: number, AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/weather/getCurrentInfo',
      headers: {
        Authorization: AccessToken,
      },
      params: {
        lat: lat,
        lon: lon,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default WeatherCurrentInfo;
