import { StyledSignFun, StyledSignFunBold, StyledSignFunInput, StyledSignFunSendButton } from './SignFun.styled';
import { useNavigate } from 'react-router-dom';
import SignPostLogin from '../../../api/sign/SignPostLogin';
import { useState } from 'react';
import useLoginStore from '../../../stores/login/useLoginStore';

const SignFun = () => {
  const navigate = useNavigate();
  const [submitId, setSubmitId] = useState();
  const [submitPassword, setSubmitPassword] = useState();
  // const [accessToken, setAccessTokenData] = useState();

  const handleIdSubmit = (e: any) => {
    setSubmitId(e.target.value);
  };

  const handlePasswordSubmit = (e: any) => {
    setSubmitPassword(e.target.value);
  };

  const setAccessToken = useLoginStore((state: any) => state.setAccessToken);

  const loginSubmit = async (id: any, password: any) => {
    const res = await SignPostLogin(id, password);
    console.log(res);
    setAccessToken(res.data.accessToken);
    if (res.data.accessToken) {
      navigate('/main');
    } else {
      console.log('회원 정보를 확인해주세요');
    }
  };

  return (
    <StyledSignFun>
      <StyledSignFunBold id="title">로그인</StyledSignFunBold>
      <StyledSignFunBold id="content">아이디</StyledSignFunBold>
      <StyledSignFunInput onChange={handleIdSubmit} />
      <StyledSignFunBold id="content">비밀번호</StyledSignFunBold>
      <StyledSignFunInput onChange={handlePasswordSubmit} />
      <StyledSignFunSendButton onClick={() => loginSubmit(submitId, submitPassword)}>로그인</StyledSignFunSendButton>
    </StyledSignFun>
  );
};

export default SignFun;
