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
  transition: 1s;
  animation: ${fadeIn} ease 1s;
  display: flex;
  flex-direction: column;
  > h2 {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 29px;
    text-align: center;

    color: #5c8599;
  }
  position: relative;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  label {
    display: flex;
    color: #4d6f80;
    line-height: 24px;
  }

  input {
    height: 32px;
    padding: 0 16px;
    margin-bottom: 10%;
  }

  input {
    width: 100%;

    border: 1px solid #d3e2e5;
    border-radius: 16px;
    outline: none;
    color: #5c8599;
  }

  div {
    height: 80%;
    span {
      font-size: 14px;
      color: #8fa7b2;
      margin-left: 24px;
      line-height: 24px;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  color: #5c8599;
  margin-bottom: 8px;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

export const DocumentFieldsContainer = styled.div`
  width: 560px;
  height: 124px;
  left: 724px;
  top: 345px;
  display: grid;
  gap: 20px;
  background: #ffffff;
  border: 0.5px solid #007ea7;
  box-sizing: border-box;
  padding: 5px;
  grid-template-columns: repeat(4, 1fr);
`;

interface DocumentFieldProps {
  colortype: string;
}
export const DocumentField = styled.a<DocumentFieldProps>`
  width: 117px;
  height: 37px;
  left: 739px;
  top: 396.17px;
  background: ${props =>
    props.colortype === 'varchar' ? '#007ea7' : '#12AFCB'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  text-decoration: none;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0%;
  width: 203.63px;
  height: 45px;

  background: #007ea7;
  border-radius: 20px;
  color: #fff;
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
`;
