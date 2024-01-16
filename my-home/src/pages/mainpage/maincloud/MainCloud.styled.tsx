import styled from 'styled-components';

const StyledMainCloud = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-radius: 10px;
  padding: 25px;

  font-family: ${(props) => props.theme.fonts.regularfont};

  display: flex;
  flex-direction: column;
`;

const StyledMainCloudUpload = styled.div`
  flex: 4;
  background-color: ${(props) => props.theme.colors.background};
  padding: 21px 20px 18px;
  line-height: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMainCloudCapacity = styled.div`
  flex: 1;
  padding: 21px 20px 18px;
  background-color: ${(props) => props.theme.colors.background};
  margin-top: 16px;
  line-height: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledMainCloudRecent = styled.div`
  flex: 3;
  padding: 21px 20px 18px;
  background-color: ${(props) => props.theme.colors.background};
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledMainCloudIcon = styled.img`
  width: 50px;
`;

export { StyledMainCloud, StyledMainCloudUpload, StyledMainCloudCapacity, StyledMainCloudRecent, StyledMainCloudIcon };
