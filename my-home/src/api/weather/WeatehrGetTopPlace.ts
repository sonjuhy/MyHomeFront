import serverAxios from '../api';

const WeatherTopPlace = async (AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/weather/getTopPlace',
      headers: {
        Authorization: AccessToken,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default WeatherTopPlace;
