import { useNoticeGetTopHook } from '../../../hooks/Notice/useNoticeGetTop';
import { StyledMainNotice, StyledMainNoticeContents } from './MainNotice.styled';

const MainNotice = () => {
  const { topNotice } = useNoticeGetTopHook();

  return (
    <StyledMainNotice>
      <StyledMainNoticeContents>Notice | 공지사항입니당 공지사항 - 손준혁</StyledMainNoticeContents>
    </StyledMainNotice>
  );
};

export default MainNotice;
