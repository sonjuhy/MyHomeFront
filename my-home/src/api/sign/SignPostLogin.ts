import serverAxios from '../api';

const SignPostLogin = async (id: any, password: any) => {
  try {
    const response = await serverAxios({
      method: 'post',
      url: '/auth/signIn',
      data: {
        id: id,
        password: password,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default SignPostLogin;
