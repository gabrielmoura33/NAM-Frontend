import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { lighten } from 'polished';

export const Container = styled.a`
  cursor: pointer;
  margin-top: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 40px;
  min-width: 42px;
  transition: background 0.2s;
  border-radius: 18px;
  font-weight: 400;
  color: #333;
  span {
    font-family: Roboto Slab;
    font-size: 18px;
  }
  div {
    position: absolute;
    margin-right: 5px;
    &:first-child {
      left: -13px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1rem 1.2rem;
      background: #007ea7;
      height: 100%;
      border-radius: 40%;
    }
  }
  &:hover {
    background: ${lighten(0.05, '#007ea7')};
    > span {
      color: #fff;
    }
    > svg {
      transition: transform 0.2s;
      transform: translateX(10px);
      fill: #fff;
    }
  }
`;

export const ArrowIcon = styled(IoIosArrowForward)`
  position: absolute;
  right: 20px;
`;
