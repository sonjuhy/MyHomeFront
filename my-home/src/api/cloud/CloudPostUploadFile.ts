import serverAxios from '../api';

const NoticeTopGet = async (formData: FormData) => {
  try {
    const response = await serverAxios({
      method: 'post',
      url: '/file/uploadPublicFile',
      data: formData,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default NoticeTopGet;
