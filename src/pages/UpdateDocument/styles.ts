import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;

  aside {
    align-items: center;
    background: #007ea7;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 32px 24px;
    position: fixed;

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
`;

export const CreateCollectionForm = styled(Form)`
  background: #fff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  margin: 64px auto;
  overflow: hidden;
  padding: 64px 80px;
  width: 700px;

  button.confirm-button {
    align-items: center;
    background: #3cdc8c;
    border: 0;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: 800;
    height: 64px;
    justify-content: center;
    margin-top: 64px;
    transition: background-color 0.2s;
    width: 100%;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: #36cf82;
    }
  }
`;

export const RequiredFieldset = styled.fieldset`
  border: 0;

  legend {
    border-bottom: 1px solid #d3e2e5;
    color: #5c8599;
    font-size: 32px;
    font-weight: 700;
    line-height: 34px;
    margin-bottom: 20px;
    padding-bottom: 24px;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NonRequiredFieldset = styled.fieldset`
  border: 0;

  legend {
    border-bottom: 1px solid #d3e2e5;
    color: #5c8599;
    font-size: 32px;
    font-weight: 700;
    line-height: 34px;
    margin: 20px 0;
    padding-bottom: 24px;
    width: 100%;
  }
`;

export const InputBlock = styled.div`
  label {
    color: #8fa7b3;
    display: flex;
    line-height: 24px;
    margin-bottom: 8px;
    span {
      color: #8fa7b3;
      font-size: 14px;
      line-height: 24px;
      margin-left: 24px;
    }
  }

  input,
  textarea {
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    color: #5c8599;
    outline: none;
    width: 100%;
  }

  input {
    height: 41px;
    padding: 0 16px;
  }
  textarea {
    line-height: 28px;
    max-height: 240px;
    min-height: 120px;
    padding: 16px;
    resize: vertical;
  }

  input[type='file'] {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
  row-gap: 8px;
  img {
    border-radius: 20px;
    height: 96px;
    object-fit: cover;
    width: 100%;
  }
  .new-image {
    align-items: center;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    height: 96px;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

interface InputCustomContainerProps {
  type?: 'varchar' | 'text';
}
export const InputGroupCustomContainer = styled.div<InputCustomContainerProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.type === 'varchar' ? 'repeat(2, 1fr)' : '1fr'};
  gap: 20px;
  label {
    margin-left: 10px;
  }
  margin-top: 15px;
`;
export const InputCustom = styled.input``;
