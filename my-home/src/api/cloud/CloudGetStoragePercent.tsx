import serverAxios from '../api';

const CloudStoragePercent = async () => {
  try {
    const response = await serverAxios({
      method: 'get',
      url: '/file/getStorageUsage/percent',
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default CloudStoragePercent;
