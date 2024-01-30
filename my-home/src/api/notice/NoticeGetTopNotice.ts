import serverAxios from '../api';

const NoticeTopGet = async (AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/notice/getTopNotice',
      headers: {
        Authorization: AccessToken,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default NoticeTopGet;
