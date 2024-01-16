import styled from 'styled-components';

const StyledProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.regularfont};
  font-size: 14px;
  width: 100%;
  align-items: flex-end;
`;

const StyledProgressbar = styled.div`
  background-color: ${(props) => props.theme.colors.light};
  width: 100%;
  height: 15px;
  border-radius: 30px;
  overflow: hidden;
`;

const StyledProgress = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  width: 30%;
  height: 15px;
  min-width: 3px;
`;

export { StyledProgressBox, StyledProgress, StyledProgressbar };
