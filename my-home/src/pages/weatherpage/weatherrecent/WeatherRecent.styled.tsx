import styled, { css } from 'styled-components';

const StyledWeatherRecent = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
`;

const StyledWeatherRecentImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

const StyledWeatherRecentBox = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      column: `
        flex-direction: column;
        align-items: flex-start;
        // border:1px solid green;
`,
      flex: `
        // border:1px solid yellow;
        align-items: center;
        margin-bottom : 10px;
`,
    };

    return css`
      ${name[id]}
      display: flex;
    `;
  }}
`;

const StyledWeatherRecentBold = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      date: `
    font-size: 24px;
    color: #ffffff;
`,
      temperature: `
    font-size: 60px;
    color: #5CD8E0;
`,
      recent: `
    font-size: 14px;
    color: #D8D8D8;
    margin-left : 10px;
`,
      recentcity: `
    font-size: 24px;
    color: #ffffff;
    margin-left : 30px;

`,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.semiboldfont};
    `;
  }}
`;

export { StyledWeatherRecent, StyledWeatherRecentImg, StyledWeatherRecentBox, StyledWeatherRecentBold };
