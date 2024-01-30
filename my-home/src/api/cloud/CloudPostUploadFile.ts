import serverAxios from '../api';

const NoticeTopGet = async (formData: FormData, AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'post',
      url: '/file/uploadPublicFile',
      data: formData,
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
