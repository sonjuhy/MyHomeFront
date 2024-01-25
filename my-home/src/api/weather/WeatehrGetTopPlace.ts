import serverAxios from '../api';

const WeatherTopPlace = async () => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/weather/getTopPlace',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default WeatherTopPlace;
