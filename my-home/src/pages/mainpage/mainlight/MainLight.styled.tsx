import styled from 'styled-components';

const StyledMainLight = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
`;

const StyledMainLightBoldText = styled.div`
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  font-size: 32px;
  display: flex;
  color: ${(props) => props.theme.colors.gray};
`;

const StyledMainLightText = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledMainLightBody = styled.div`
  /* border: 1px solid green; */
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`;

const StyledMainLightCard = styled.div`
  background-color: #eef8fb;
  height: 150px;
`;

export { StyledMainLight, StyledMainLightBoldText, StyledMainLightText, StyledMainLightBody, StyledMainLightCard };
