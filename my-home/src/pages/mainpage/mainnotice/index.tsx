import { useNoticeGetTopHook } from '../../../hooks/Notice/useNoticeGetTop';
import { StyledMainNotice, StyledMainNoticeContents } from './MainNotice.styled';

const MainNotice = () => {
  const { topNoticeTitle, topNoticeWrite } = useNoticeGetTopHook();

  return (
    <StyledMainNotice>
      <StyledMainNoticeContents>
        Notice | {topNoticeTitle} - {topNoticeWrite}
      </StyledMainNoticeContents>
    </StyledMainNotice>
  );
};

export default MainNotice;
