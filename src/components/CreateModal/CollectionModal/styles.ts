import styled, { keyframes } from 'styled-components';
import { Form } from '@unform/web';

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const Container = styled(Form)`
  width: 100%;
  transition: 1s;
  animation: ${fadeIn} ease 1s;
  margin-top: 60px;
  padding: 0 15px;
  position: relative;
`;

export const InputBlock = styled.div`
  label {
    display: flex;
    color: #4d6f80;
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    height: 32px;
    padding: 0 16px;
    margin-bottom: 10%;
  }

  textarea {
    min-height: 200px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  input,
  textarea {
    width: 100%;

    border: 1px solid #d3e2e5;
    border-radius: 4px;
    outline: none;
    color: #5c8599;
  }
`;

export const Label = styled.label`
  display: flex;
  color: #8fa7b2;
  margin-bottom: 8px;
  line-height: 24px;
  font-weight: 600;

  span {
    font-size: 14px;
    color: #8fa7b2;
    margin-left: 24px;
    line-height: 24px;
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  background: transparent;
  position: absolute;

  bottom: 0;
  right: 0;
`;
