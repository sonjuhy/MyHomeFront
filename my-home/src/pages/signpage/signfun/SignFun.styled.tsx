import styled, { css } from 'styled-components';

const StyledSignFun = styled.div`
  background-color: #ffffff;
  margin: 150px 150px 0px 150px;
  min-width: 630px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledSignFunBold = styled.div.attrs<any>(() => ({}))`
  ${(props) => {
    const id = props.id;
    const name: any = {
      title: `
      font-size : 50px;
      color : #5CD8E0;
      margin-bottom : 50px;
`,
      content: `
      font-size : 18px;
      color : #000000;
      margin-bottom : 10px;

`,
    };

    return css`
      ${name[id]}
      font-family: ${(props) => props.theme.fonts.semiboldfont};
    `;
  }}
`;

const StyledSignFunInput = styled.input`
  border: 2px solid ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.semiboldfont};
  background: none;
  width: 550px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const StyledSignFunSendButton = styled.div`
  border: 1px solid red;
`;

export { StyledSignFun, StyledSignFunBold, StyledSignFunInput, StyledSignFunSendButton };
