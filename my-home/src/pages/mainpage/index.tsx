import { StyledMain, StyledMainContain } from './MainPage.styled';
import MainCloud from './maincloud';
import MainLight from './mainlight';
import MainNotice from './mainnotice';
import MainWeather from './mainweather';

const Main = () => {
  return (
    <StyledMain>
      <StyledMainContain id="contents">
        <MainNotice />
        <MainWeather />
        <MainLight />
      </StyledMainContain>
      <StyledMainContain id="cloud">
        <MainCloud />
      </StyledMainContain>
    </StyledMain>
  );
};

export default Main;
