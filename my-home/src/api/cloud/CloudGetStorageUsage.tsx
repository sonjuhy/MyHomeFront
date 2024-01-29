import serverAxios from '../api';

const CloudStorageUsage = async (AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/file/getStorageUsage/GB',
      headers: {
        Authorization: AccessToken,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default CloudStorageUsage;
