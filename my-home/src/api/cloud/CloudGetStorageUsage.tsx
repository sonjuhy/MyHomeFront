import serverAxios from '../api';

const CloudStorageUsage = async () => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/file/getStorageUsage/GB',
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default CloudStorageUsage;
