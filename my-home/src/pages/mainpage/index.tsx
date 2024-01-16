import { StyledMain, StyledMainContain } from './MainPage.styled';
import MainCloud from './maincloud';
import MainNotice from './mainnotice';

const Main = () => {
  return (
    <StyledMain>
      <StyledMainContain id="contents">
        <MainNotice />
      </StyledMainContain>
      <StyledMainContain id="cloud">
        <MainCloud />
      </StyledMainContain>
    </StyledMain>
  );
};

export default Main;
