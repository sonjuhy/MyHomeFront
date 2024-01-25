import { StyledMainWeather, StyledMainWeatherText } from './MainWeather.styled';
import { useWeatherGet } from '../../../hooks/weather/useWeatherGet';

const MainWeather = () => {
  const { weatherTopPlace } = useWeatherGet();

  // api 연동하고 수정
  const recentweather = 'windy';

  return (
    <StyledMainWeather recentweather={recentweather}>
      <StyledMainWeatherText id="city">창원</StyledMainWeatherText>
      <StyledMainWeatherText id="detail">경상남도 창원시 성산구, 12:00 기준</StyledMainWeatherText>
      <StyledMainWeatherText id="temperature">10ºC</StyledMainWeatherText>
    </StyledMainWeather>
  );
};

export default MainWeather;
