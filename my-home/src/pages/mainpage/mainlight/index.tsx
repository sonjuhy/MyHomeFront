import { StyledMainLight, StyledMainLightBody, StyledMainLightBoldText, StyledMainLightCard } from './MainLight.styled';

const MainLight = () => {
  // api 연동 후 수정
  // 즐겨찾기 전등만 ?

  return (
    <StyledMainLight>
      <StyledMainLightBoldText>전등 컨트롤</StyledMainLightBoldText>
      <StyledMainLightBody>
        <StyledMainLightCard>카드</StyledMainLightCard>
        <StyledMainLightCard>카드</StyledMainLightCard>
        <StyledMainLightCard>카드</StyledMainLightCard>
        <StyledMainLightCard>카드</StyledMainLightCard>
        <StyledMainLightCard>카드</StyledMainLightCard>
        <StyledMainLightCard>카드</StyledMainLightCard>
      </StyledMainLightBody>
    </StyledMainLight>
  );
};

export default MainLight;
