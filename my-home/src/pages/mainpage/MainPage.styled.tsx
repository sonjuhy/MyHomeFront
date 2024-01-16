import styled, { css } from 'styled-components';

const StyledMain = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  flex: 9;
  display: flex;
  margin-left: 200px;
  min-width: 1220px;
`;

const StyledMainContain = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      contents: `
    flex : 5;
    align-items: center;

`,
      cloud: `
      flex : 2;
  
`,
    };

    return css`
      ${name[id]}
      /* border: 1px solid red; */
      padding: 50px;
      display: flex;
      flex-direction: column;
    `;
  }}
`;

export { StyledMain, StyledMainContain };
