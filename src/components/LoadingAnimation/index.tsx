import React from 'react';
import animationData from '../../assets/animations/892-loading-icon.json';

import { Lottie, Container } from './styles';

// import { Container } from './styles';
interface AnimationProps {
  visible: boolean;
}
const LoadingAnimation: React.FC<AnimationProps> = ({ visible }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container visible={visible}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default LoadingAnimation;
