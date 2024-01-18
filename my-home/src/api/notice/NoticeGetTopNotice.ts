import serverAxios from '../api';

const NoticeTopGet = async () => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/notice/getTopNotice',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default NoticeTopGet;
