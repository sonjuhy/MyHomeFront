import serverAxios from '../api';

const CloudStoragePercent = async (AccessToken: any) => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/file/getStorageUsage/percent',
      headers: {
        Authorization: AccessToken,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default CloudStoragePercent;
