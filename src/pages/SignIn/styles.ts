import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  background: rgba(0, 126, 167, 0.57);

  height: 100vh;

  display: flex;
  align-items: stretch;
`;
const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const ImageContainer = styled.div`
  width: 45%;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  height: 502px;
  width: 385px;
  border-radius: 10px;
  align-items: center;
  animation: ${appearFromLeft} 0.5s;

  > img {
    margin: 50px 0 40px 0;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      margin-top: 8px;
      text-decoration: none;
      color: #000;
      font-size: 12px;
      transition: color 0.2s;
      &:hover {
        color: var(--primary);
      }
    }
  }
`;
