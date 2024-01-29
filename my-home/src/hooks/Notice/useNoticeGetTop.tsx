import { useEffect, useState } from 'react';
import NoticeTopGet from '../../api/notice/NoticeGetTopNotice';
import useLoginStore from '../../stores/login/useLoginStore';

export const useNoticeGetTopHook = () => {
  const [topNoticeTitle, setTopNoticeTitle] = useState<any>([]);
  const [topNoticeWrite, setTopNoticeWrite] = useState<any>([]);
  const AccessToken = useLoginStore((state: any) => state.AccessToken);

  useEffect(() => {
    const getTopNotice = async () => {
      const response = await NoticeTopGet(AccessToken);
      setTopNoticeTitle(response.data.title);
      setTopNoticeWrite(response.data.writer);
    };
    getTopNotice();
  }, []);

  return { topNoticeTitle, topNoticeWrite };
};
