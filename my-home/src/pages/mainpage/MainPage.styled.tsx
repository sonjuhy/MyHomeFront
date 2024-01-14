import styled, { css } from 'styled-components';

const StyledMain = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const StyledMainContain = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      contents: `
    flex : 5;
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
      justify-content: center;
    `;
  }}
`;

export { StyledMain, StyledMainContain };
