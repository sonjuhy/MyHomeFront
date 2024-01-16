import Progressbar from '../../../components/progressbar';
import {
  StyledMainCloud,
  StyledMainCloudCapacity,
  StyledMainCloudIcon,
  StyledMainCloudRecent,
  StyledMainCloudUpload,
} from './MainCloud.styled';

const MainCloud = () => {
  return (
    <StyledMainCloud>
      <StyledMainCloudUpload>
        <StyledMainCloudIcon src="/icon/upload.png" alt="upload" />
        <span>파일을 업로드 해주세요</span>
      </StyledMainCloudUpload>
      <StyledMainCloudCapacity>
        남은 용량
        <Progressbar />
      </StyledMainCloudCapacity>
      <StyledMainCloudRecent>최근 업로드된 파일</StyledMainCloudRecent>
    </StyledMainCloud>
  );
};

export default MainCloud;
