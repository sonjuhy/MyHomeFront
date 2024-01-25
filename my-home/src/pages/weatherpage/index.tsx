import { StyledWeather, StyledWeatherBack, StyledWeatherTodayContainer } from './WeatehrPage.styled';
import WeatherRecent from './weatherrecent';
import WeatherToday from './weathertoday';
import WeatherWeekly from './weatherweekly';

const Weather = () => {
  const recentweather = 'sunny';
  return (
    <StyledWeather recentweather={recentweather}>
      <StyledWeatherBack>
        <StyledWeatherTodayContainer>
          <WeatherRecent />
          <WeatherToday />
        </StyledWeatherTodayContainer>
        <WeatherWeekly />
      </StyledWeatherBack>
    </StyledWeather>
  );
};

export default Weather;
