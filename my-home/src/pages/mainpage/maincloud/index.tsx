import {
  StyledMainCloud,
  StyledMainCloudCapacity,
  StyledMainCloudRecent,
  StyledMainCloudUpload,
} from './MainCloud.styled';

const MainCloud = () => {
  return (
    <StyledMainCloud>
      <StyledMainCloudUpload>업로드</StyledMainCloudUpload>
      <StyledMainCloudCapacity>용량</StyledMainCloudCapacity>
      <StyledMainCloudRecent>최근파일</StyledMainCloudRecent>
    </StyledMainCloud>
  );
};

export default MainCloud;
