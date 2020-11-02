import styled from 'styled-components';
import LottieLib from 'react-lottie';

interface AnimationContainerProps {
  visible: boolean;
}
export const Container = styled.div<AnimationContainerProps>`
  background: rgba(37, 34, 30, 0.3);
  position: absolute;
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  visibility: ${props => (props.visible ? 'unset' : 'hidden')};
  align-items: center;
`;
export const Lottie = styled(LottieLib)``;
