import styled from 'styled-components';

const StyledLight = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  flex: 9;
  display: flex;
  margin-left: 200px;
  min-width: 1220px;
`;

export { StyledLight };
