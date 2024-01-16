import { StyledProgress, StyledProgressBox, StyledProgressbar } from './Progressbar.styled';

const Progressbar = () => {
  return (
    <StyledProgressBox>
      남은용량/전체용량
      <StyledProgressbar>
        <StyledProgress />
      </StyledProgressbar>
    </StyledProgressBox>
  );
};

export default Progressbar;
