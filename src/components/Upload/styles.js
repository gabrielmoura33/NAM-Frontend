import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #43b05c;
`;
const dragReject = css`
  border-color: #e57878;
`;
export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #ddd;
  border-radius: 20px;
  height: 100%;
  cursor: pointer;
  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#FFF',
  error: '#e57878',
  sucess: '#43B05C',
};
export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  max-width: 80%;
  text-align: center;
`;
