import Progressbar from '../../../components/progressbar';
import { useCloudStorageUsageHook } from '../../../hooks/cloud/useCloudStorage';
import {
  StyledMainCloud,
  StyledMainCloudCapacity,
  StyledMainCloudIcon,
  StyledMainCloudRecent,
  StyledMainCloudUpload,
} from './MainCloud.styled';

const MainCloud = () => {
  const { cloudStorageUsage, cloudStorageTotal, cloudStoragePercent } = useCloudStorageUsageHook();

  const handleIconClick = () => {
    // document.getElementById : HTML 코드에서 특정 ID 값을 가지고 있는 요소에 접근
    // 즉, <input type="file" id="fileInput"  ... /> 에 접근
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log('선택한 파일:', selectedFile);
  };

  return (
    <StyledMainCloud>
      <StyledMainCloudUpload>
        <StyledMainCloudIcon src="/icon/upload.png" alt="upload" onClick={handleIconClick} />
        <span>파일을 업로드 해주세요</span>
        <input type="file" id="fileInput" accept="image/*/" style={{ display: 'none' }} onChange={handleFileChange} />
      </StyledMainCloudUpload>
      <StyledMainCloudCapacity>
        남은 용량
        <Progressbar total={cloudStorageTotal + 'GB'} usage={cloudStorageUsage + 'GB'} percent={cloudStoragePercent} />
      </StyledMainCloudCapacity>
      <StyledMainCloudRecent>최근 업로드된 파일</StyledMainCloudRecent>
    </StyledMainCloud>
  );
};

export default MainCloud;
