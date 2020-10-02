import styled from 'styled-components';
import { BsBellFill } from 'react-icons/bs';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  > img {
    position: absolute;
    z-index: 1;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  z-index: 5;

  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'hero' 'rest';
  padding: 2rem;
`;

export const WelcomeSection = styled.div`
  grid-area: hero;
  padding: 0 0 0 2rem;
  line-height: 1.5;
  h1 {
    font-weight: 100;
  }
  p {
    font-weight: 400;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: 3px solid #fff;
    }
  }
`;

export const BellIcon = styled(BsBellFill)`
  width: 20px;
  height: 20px;
  fill: #fff;
`;

export const Section = styled.div`
  display: grid;
  align-items: center;
  z-index: 5;
  padding: 0 6rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 0.5fr));
  gap: 2rem;
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background: #fff;
    height: 12rem;
    width: 12rem;
    border-radius: 8%;
    opacity: 0.95;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;

    span {
      font-size: 0.8rem;
    }

    &:hover {
      background: ${darken(0.2, '#FFF')};
      opacity: 1;
    }
  }
`;
