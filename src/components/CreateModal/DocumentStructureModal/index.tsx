import React from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import {
  Container,
  Content,
  InputBlock,
  Label,
  DocumentFieldsContainer,
  DocumentField,
} from './styles';

const DocumentStructureModal: React.FC = () => {
  return (
    <Container>
      <h2>Digite os campos dos documentos</h2>
      <Content>
        <InputBlock>
          <Label htmlFor="fieldname">Nome do campo</Label>

          <div>
            <span>Máximo de 300 catacteres</span>
            <input id="fieldname" />
          </div>
          <a href="sadsa">
            <AiFillPlusCircle size={20} color="#43B05C" />
          </a>
        </InputBlock>

        <Label htmlFor="">Campos: </Label>
        <DocumentFieldsContainer>
          <DocumentField href="" />
          <DocumentField />
          <DocumentField />

          <DocumentField />
          <DocumentField />
        </DocumentFieldsContainer>
      </Content>
      <Content>
        <InputBlock>
          <Label htmlFor="fieldname">Nome do campo</Label>

          <div>
            <span>Máximo de 300 catacteres</span>
            <input id="fieldname" />
          </div>
          <a href="sadsa">
            <AiFillPlusCircle size={20} color="#43B05C" />
          </a>
        </InputBlock>

        <Label htmlFor="">Campos: </Label>
        <DocumentFieldsContainer>
          <DocumentField href="" />
          <DocumentField />
          <DocumentField />

          <DocumentField />
          <DocumentField />
        </DocumentFieldsContainer>
      </Content>
    </Container>
  );
};

export default DocumentStructureModal;
