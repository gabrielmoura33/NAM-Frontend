/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */
import React, { FormHTMLAttributes, useCallback, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Upload from '../Upload';
import CollectionModal from './CollectionModal';
import DocumentStructureModal from './DocumentStructureModal';
import {
  Container,
  Wrapper,
  Aside,
  Content,
  UploadBox,
  ExitButton,
} from './styles';

interface ModalProps extends FormHTMLAttributes<HTMLFormElement> {
  visibility: boolean;
  setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateCollectionModal: React.FC<ModalProps> = ({
  visibility,
  setModalVisibility,
}) => {
  const [coverImg, setCoverImg] = useState<File>();
  const [preview, setPreview] = useState('');

  const handleUpload = useCallback(file => {
    setCoverImg(file[0]);
    setPreview(URL.createObjectURL(file[0]));
  }, []);
  return (
    <Wrapper visible={visibility}>
      <Container>
        <ExitButton onClick={() => setModalVisibility(false)}>
          <AiFillCloseCircle size={32} color="#007EA7" />
        </ExitButton>

        <Aside>
          <h1>Cadastro de Acervo</h1>
          <UploadBox preview={preview}>
            <Upload onUpload={handleUpload} />
          </UploadBox>
        </Aside>
        <Content>
          <CollectionModal coverImg={coverImg} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default CreateCollectionModal;
