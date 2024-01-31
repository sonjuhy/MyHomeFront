import {
  StyledWeather,
  StyledWeatherBack,
  StyledWeatherContainer,
  StyledWeatherTodayContainer,
} from './WeatehrPage.styled';
import WeatherRecent from './weatherrecent';
import WeatherToday from './weathertoday';
import WeatherWeekly from './weatherweekly';

const Weather = () => {
  const recentweather = 'sunny';
  return (
    <StyledWeather recentweather={recentweather}>
      <StyledWeatherBack>
        <StyledWeatherContainer>
          <StyledWeatherTodayContainer>
            <WeatherRecent />
            <WeatherToday />
          </StyledWeatherTodayContainer>
          <WeatherWeekly />
        </StyledWeatherContainer>
      </StyledWeatherBack>
    </StyledWeather>
  );
};

export default Weather;
