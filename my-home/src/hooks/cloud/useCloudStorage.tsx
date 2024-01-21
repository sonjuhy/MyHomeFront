import { useEffect, useState } from 'react';
import CloudStorageUsage from '../../api/cloud/CloudGetStorageUsage';
import CloudStoragePercent from '../../api/cloud/CloudGetStoragePercent';

export const useCloudStorageUsageHook = () => {
  const [cloudStorageTotal, setCloudStorageTotal] = useState<any>();
  const [cloudStorageUsage, setCloudStorageUsage] = useState<any>();
  const [cloudStoragePercent, setCloudStoragePercent] = useState<any>();

  useEffect(() => {
    const getCloudStorage = async () => {
      const response = await CloudStorageUsage();
      setCloudStorageUsage(response.data[1]);
      setCloudStorageTotal(response.data[0]);
      //   setCloudStorageUsage(response.data.title);
    };
    getCloudStorage();
  }, []);

  useEffect(() => {
    const getCloudStoragePercent = async () => {
      const response = await CloudStoragePercent();
      setCloudStoragePercent(response.data[1]);
      //   setCloudStorageUsage(response.data.title);
    };
    getCloudStoragePercent();
  }, []);

  return { cloudStorageUsage, cloudStorageTotal, cloudStoragePercent };
};
