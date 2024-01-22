import {
  StyledWeatherCard,
  StyledWeatherCardIcon,
  StyledWeatherToday,
  StyledWeatherTodayBold,
} from './WeatherToday.styled';

const WeatherToday = () => {
  return (
    <StyledWeatherToday>
      <StyledWeatherCard>
        <StyledWeatherCardIcon src="weather/icon/sunny.png" alt="sunny" />
        <StyledWeatherTodayBold id="temperature">+22ºC</StyledWeatherTodayBold>
        <StyledWeatherTodayBold id="time">12:00</StyledWeatherTodayBold>
      </StyledWeatherCard>
      <StyledWeatherCard>
        <StyledWeatherCardIcon src="weather/icon/sunny.png" alt="sunny" />
        <StyledWeatherTodayBold id="temperature">+22ºC</StyledWeatherTodayBold>
        <StyledWeatherTodayBold id="time">12:00</StyledWeatherTodayBold>
      </StyledWeatherCard>
      <StyledWeatherCard>
        <StyledWeatherCardIcon src="weather/icon/sunny.png" alt="sunny" />
        <StyledWeatherTodayBold id="temperature">+22ºC</StyledWeatherTodayBold>
        <StyledWeatherTodayBold id="time">12:00</StyledWeatherTodayBold>
      </StyledWeatherCard>
      <StyledWeatherCard>
        <StyledWeatherCardIcon src="weather/icon/sunny.png" alt="sunny" />
        <StyledWeatherTodayBold id="temperature">+22ºC</StyledWeatherTodayBold>
        <StyledWeatherTodayBold id="time">12:00</StyledWeatherTodayBold>
      </StyledWeatherCard>
      <StyledWeatherCard>
        <StyledWeatherCardIcon src="weather/icon/sunny.png" alt="sunny" />
        <StyledWeatherTodayBold id="temperature">+22ºC</StyledWeatherTodayBold>
        <StyledWeatherTodayBold id="time">12:00</StyledWeatherTodayBold>
      </StyledWeatherCard>
    </StyledWeatherToday>
  );
};

export default WeatherToday;
