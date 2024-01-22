import {
  StyledWeatherRecent,
  StyledWeatherRecentBold,
  StyledWeatherRecentBox,
  StyledWeatherRecentImg,
} from './WeatherRecent.styled';

const WeatherRecent = () => {
  return (
    <StyledWeatherRecent>
      <StyledWeatherRecentBox id="column">
        <StyledWeatherRecentBox id="flex">
          <StyledWeatherRecentBold id="recentcity">창원</StyledWeatherRecentBold>
          <StyledWeatherRecentBold id="recent">경상남도 창원시 성산구, 12:00 기준</StyledWeatherRecentBold>
        </StyledWeatherRecentBox>
        <StyledWeatherRecentBox id="flex">
          <StyledWeatherRecentImg src="weather/recenticon/sunny.png" alt="sunny" />
          <StyledWeatherRecentBox id="column">
            <StyledWeatherRecentBold id="date">01월22일</StyledWeatherRecentBold>
            <StyledWeatherRecentBold id="temperature">+22ºC</StyledWeatherRecentBold>
          </StyledWeatherRecentBox>
        </StyledWeatherRecentBox>
      </StyledWeatherRecentBox>
    </StyledWeatherRecent>
  );
};

export default WeatherRecent;
