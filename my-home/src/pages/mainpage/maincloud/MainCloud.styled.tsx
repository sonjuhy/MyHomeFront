import styled from 'styled-components';

const StyledMainCloud = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 10px;
  padding: 25px;

  font-family: ${(props) => props.theme.fonts.regularfont};
`;

const StyledMainCloudUpload = styled.div`
  border: 1px solid red;
`;

const StyledMainCloudCapacity = styled.div`
  border: 1px solid red;
`;

const StyledMainCloudRecent = styled.div`
  border: 1px solid red;
`;

export { StyledMainCloud, StyledMainCloudUpload, StyledMainCloudCapacity, StyledMainCloudRecent };
