import { useEffect, useState } from 'react';
import NoticeTopGet from '../../api/notice/NoticeGetTopNotice';

export const useNoticeGetTopHook = () => {
  const [topNoticeTitle, setTopNoticeTitle] = useState<any>([]);
  const [topNoticeWrite, setTopNoticeWrite] = useState<any>([]);

  useEffect(() => {
    const getTopNotice = async () => {
      const response = await NoticeTopGet();
      setTopNoticeTitle(response.data.title);
      setTopNoticeWrite(response.data.writer);
    };
    getTopNotice();
  }, []);

  return { topNoticeTitle, topNoticeWrite };
};
