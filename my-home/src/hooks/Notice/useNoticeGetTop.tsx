import { useEffect, useState } from 'react';
import NoticeTopGet from '../../api/notice/NoticeGetTopNotice';

export const useNoticeGetTopHook = () => {
  const [topNotice, setTopNotice] = useState<any>([]);

  useEffect(() => {
    const getTopNotice = async () => {
      const response = await NoticeTopGet();
      console.log(response);
    };
    getTopNotice();
  }, []);

  return { topNotice };
};
