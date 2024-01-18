import serverAxios from '../api';

const NoticeTopGet = async () => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/notice/getTopNotice',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyZWd1bGFyIiwicm9sZXMiOiJzdHJpbmciLCJpYXQiOjE3MDU1MDQ4MzksImV4cCI6MTcwNzY2NDgzOX0.UrTc1AGXJDQnGN9ysbWQIhYqS4MzNs0OfLLdkDqY9yE',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default NoticeTopGet;
