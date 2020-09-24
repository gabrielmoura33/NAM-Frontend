import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}
export const Container = styled.div<ContainerProps>`
  border-radius: 5px;
  border: 1px solid #999;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 20px;
  }

  select {
    background: transparent;
    flex: 1;
    border: 0;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }
`;
