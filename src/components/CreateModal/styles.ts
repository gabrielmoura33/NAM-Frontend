import styled, { keyframes } from 'styled-components';

interface ModalProps {
  visible: boolean;
}
export const Wrapper = styled.div<ModalProps>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.57);
  z-index: 35;
  align-items: center;
  justify-content: center;
  display: ${props => (props.visible ? 'flex' : 'none')};
`;

const showModal = keyframes`
from {
  opacity: 0;
  transform: scale(0);
}
to {
  opacity: 1;
  transform: scale(1);
}
`;
export const Container = styled.div`
  height: 705px;
  width: 1044px;
  border-radius: 28px;
  background: #ffffff;
  animation: ${showModal} ease 0.5s;
  display: flex;
  position: relative;
`;

export const Aside = styled.aside`
  width: 40%;
  height: 100%;
  background: #007ea7;
  display: flex;

  flex-direction: column;
  align-items: center;
  padding: 2rem;
  h1 {
    font-size: 35px;
    font-family: Nunito;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`;

interface UploadBoxProps {
  preview: string;
}
export const UploadBox = styled.div<UploadBoxProps>`
  align-items: stretch;
  background: url(${props => props.preview}) no-repeat center;

  background-size: cover;
  border-radius: 20px;

  margin-top: 30%;
  height: 50%;
  width: 90%;
`;
export const Content = styled.section`
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 2rem; // 5rem 2rem;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  height: 32px;
  border: 0;
  background: invisible;
`;
