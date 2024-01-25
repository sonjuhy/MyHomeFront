import styled, { css } from 'styled-components';

const StyledWeatherToday = styled.div`
  background-color: #00000050;
  width: 550px;
  height: 200px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledWeatherTodayBold = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      temperature: `
    color : #ffffff;
    font-size: 16px;
`,
      time: `
    color : #DFDFDF;
    font-size: 14px;
`,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.semiboldfont};
    `;
  }}
`;

const StyledWeatherCard = styled.div`
  /* border: 1px solid white; */
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledWeatherCardIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export { StyledWeatherToday, StyledWeatherTodayBold, StyledWeatherCard, StyledWeatherCardIcon };
