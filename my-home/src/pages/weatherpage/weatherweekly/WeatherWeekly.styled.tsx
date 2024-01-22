import styled, { css } from 'styled-components';

const StyledWeatherWeekly = styled.div`
  /* background-color: green; */
  border-top: 2px solid #ffffff;
  height: 200px;
  margin: 20px 30px 50px 30px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  /* gap: 10px; */
  position: relative;
`;

const StyledWeatherWeeklyBold = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      mark: `
      position: absolute;
      font-size: 14px;
      color: #5CD8E0;
      top: -35px;
      left: 20px;
`,
      cardTitle: `
      color : #ffffff;
      display: flex;
      font-size : 24px;
`,
      cardMax: `
      color : #ffffff;
      display: flex;
      font-size : 16px;
      margin-left : 3px;
`,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.semiboldfont};
    `;
  }}
`;

const StyledWeatherWeeklyRegular = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      mark: `
    position: absolute;
    font-size: 14px;
    color: #5CD8E0;
    top: -35px;
    left: 20px;
`,
      cardDate: `
    color : #D8D8D8;
    display: flex;
    font-size : 16px;
`,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.regularfont};
    `;
  }}
`;

const StyledWeatherWeeklyTodayMark = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  position: absolute;
  height: 3px;
  width: 13%;
  top: -4px;
  left: 10px;
`;

const StyledWeatherWeeklyTodayMarkTriangle = styled.div`
  position: absolute;
  top: -16px;
  left: 30px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 15px solid ${(props) => props.theme.colors.main};
`;

const StyledWeatherWeeklyCard = styled.div`
  /* border: 1px solid red; */
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledWeatherWeeklyCardFlex = styled.div`
  display: flex;
`;

const StyledWeatherWeeklyCardIcon = styled.img`
  width: 55px;
  margin-top: 10px;
`;

export {
  StyledWeatherWeekly,
  StyledWeatherWeeklyBold,
  StyledWeatherWeeklyRegular,
  StyledWeatherWeeklyTodayMark,
  StyledWeatherWeeklyTodayMarkTriangle,
  StyledWeatherWeeklyCard,
  StyledWeatherWeeklyCardFlex,
  StyledWeatherWeeklyCardIcon,
};
