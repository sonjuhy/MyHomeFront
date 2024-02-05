import { useEffect, useState } from 'react';

const useLocationGetHook = () => {
  const [latitude, setLatitude] = useState<number | any>();
  const [longitude, setLongitude] = useState<number | any>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            setError(error.message);
          },
        );
      } else {
        setError('죄송합니다. 위치 정보를 사용할 수 없습니다.');
      }
    };

    getLocation();
    // console.log(latitude, longitude, error);
  }, [latitude]);
  return { latitude, longitude, error };
};

export default useLocationGetHook;
