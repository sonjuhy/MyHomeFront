import { StyledSignPage } from './SignPage.styled';
import SignFun from './signfun';
import SignWelcome from './signwelcome';

const SignPage = () => {
  return (
    <StyledSignPage>
      <SignWelcome />
      <SignFun />
    </StyledSignPage>
  );
};

export default SignPage;
