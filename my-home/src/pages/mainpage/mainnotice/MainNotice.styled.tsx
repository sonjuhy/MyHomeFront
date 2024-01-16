import styled from 'styled-components';

const StyledMainNotice = styled.div`
  width: 100%;
  height: 50px;
  max-width: 1000px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 1px 1px 5px #888888;

  display: flex;
`;

const StyledMainNoticeContents = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  padding: 3px 50px;
  align-items: center;
`;

export { StyledMainNotice, StyledMainNoticeContents };
