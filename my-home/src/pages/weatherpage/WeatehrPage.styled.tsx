import styled from 'styled-components';

const StyledWeather = styled.div.attrs<{ recentweather: string }>((props) => ({
  style: {
    backgroundImage: `url('weather/weather-${props.recentweather}.jpg')`,
  },
}))<{ recentweather: string }>`
  background-size: cover;
  min-height: 100vh;
  flex: 9;
  display: flex;
  margin-left: 200px;
  min-width: 1220px;
`;

const StyledWeatherBack = styled.div`
  background-color: #00000025;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledWeatherTodayContainer = styled.div`
  margin: 20px 100px 50px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export { StyledWeather, StyledWeatherBack, StyledWeatherTodayContainer };
