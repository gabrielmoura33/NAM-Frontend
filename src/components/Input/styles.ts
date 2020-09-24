import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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

  ${props =>
    props.isFocused &&
    css`
      color: var(--primary);
      border-color: var(--primary);
    `}
  ${props =>
    props.isFilled &&
    css`
      color: var(--primary);
    `}
    ${props =>
      props.isErrored &&
      css`
        border: 2px solid #c53030;
      `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #666360;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
