import { StyledProgress, StyledProgressBox, StyledProgressbar } from './Progressbar.styled';

const Progressbar = (props: any) => {
  console.log('probress', props.percent);
  return (
    <StyledProgressBox>
      {props.usage} / {props.total}
      <StyledProgressbar>
        <StyledProgress progress={props.percent} />
      </StyledProgressbar>
    </StyledProgressBox>
  );
};

export default Progressbar;
