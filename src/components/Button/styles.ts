import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--primary);
  height: 40px;
  border-radius: 8px;
  border: 0;
  padding: 0 10px;
  color: #fff;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  font-family: 'Roboto' sans-serif;
  margin-top: 25px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#007EA7')};
  }
`;
