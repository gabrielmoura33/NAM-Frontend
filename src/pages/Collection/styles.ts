import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    align-items: center;
    background: #007ea7;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 32px 24px;
    position: fixed;

    div {
      width: 100%;
    }

    img {
      width: 48px;
    }

    footer a,
    button {
      &:hover {
        background-color: #17d6eb;
      }
    }
    footer a,
    footer button {
      align-items: center;
      background-color: #12afcb;
      border: 0;
      border-radius: 16px;
      cursor: pointer;
      display: flex;
      height: 48px;
      justify-content: center;
      transition: background-color 0.2s;
      width: 48px;
    }
  }

  main {
    flex: 1;
  }

  .orphanage-details {
    background-color: #fff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    margin: 64px auto;
    overflow: hidden;
    width: 700px;
    > img {
      height: 300px;
      object-fit: cover;
      width: 100%;
    }
    .images {
      column-gap: 16px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      margin: 16px 40px 0;

      button {
        background-color: none;
        border: 0;
        border-radius: 20px;
        cursor: pointer;
        height: 88px;
        opacity: 0.6;
        outline: none;
        overflow: hidden;
        &.active {
          opacity: 1;
        }

        img {
          height: 88px;
          object-fit: cover;
          width: 100%;
        }
      }
    }
    .orphanage-details-content {
      padding: 80px;
      h1 {
        color: #4d6f80;
        font-size: 54px;
        line-height: 54px;
        margin-bottom: 8px;
      }
      p {
        color: #5c8599;
        line-height: 28px;
        margin-top: 24px;
      }
      hr {
        background-color: #d3e2e6;
        border: 0;
        height: 1px;
        margin: 24px 0;
        width: 100%;
      }
      h2 {
        color: #4d6f80;
        font-size: 36px;
        line-height: 46px;
        border-bottom: 1px solid #d3e2e5;
      }

      .open-details {
        column-gap: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 24px;
        div {
          border-radius: 20px;
          line-height: 28px;
          padding: 32px 24px;
          svg {
            display: block;
            margin-bottom: 20px;
          }
          &.hour {
            background: linear-gradient(149.97deg, #e6f7fb 8.13%, #fff 92.67%);
            border: 1px solid #b3dae2;
            color: #5c8599;
          }
          &.open-on-weekends {
            background: linear-gradient(154.16deg, #edfff6 7.85%, #fff 91.03%);
            border: 1px solid #a1e9c5;
            color: #37c77f;
            &.dont-open {
              background: linear-gradient(
                154.16deg,
                #fdf0f5 7.85%,
                #fff 91.03%
              );
              border: 1px solid #ffbcd4;
              color: #ff669d;
            }
          }
        }
      }

      .map-container {
        margin-bottom: 64px;
        footer {
          padding: 20px 0;
          text-align: center;
          a {
            color: #0089a5;
            line-height: 24px;
            text-decoration: none;
          }
        }
        .leaflet-container {
          border-bottom: 1px solid #dde3f0;
          border-radius: 20px;
        }
      }
    }
  }
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
    margin-top: 3%;
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

export const DocumentBoxContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const boxAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const DocumentBox = styled.div`
  cursor: pointer;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: #fff;
  height: 10rem;
  width: 10rem;

  border-radius: 8%;
  opacity: 0.95;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background 0.2s;
  animation: ${boxAnimation} 0.5s;

  span {
    font-size: 0.8rem;
  }

  &:hover {
    background: ${darken(0.2, '#FFF')};
  }
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'main main main right right right';
  grid-gap: 10px;

  .contact-button {
    align-items: center;
    border: 0;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: 800;
    height: 64px;
    justify-content: center;
    transition: opacity 0.2s;
    text-decoration: none;
    svg {
      margin-right: 16px;
    }
    &:hover {
      opacity: 0.7;
    }
    &:nth-child(1) {
      margin-top: 40px;
      grid-area: header;
      background-color: #007ea7;
    }
    &:nth-child(2) {
      grid-area: main;
      background-color: #27ae60;
    }
    &:nth-child(3) {
      grid-area: right;
      background-color: #12afcb;
    }
  }
`;
