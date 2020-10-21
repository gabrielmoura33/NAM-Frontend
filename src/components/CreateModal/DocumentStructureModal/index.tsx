/* eslint-disable react/no-array-index-key */
import React, {
  FormHTMLAttributes,
  useState,
  useCallback,
  FormEvent,
} from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import {
  Container,
  Content,
  InputBlock,
  Label,
  DocumentFieldsContainer,
  DocumentField,
} from './styles';

interface DocumentStructureModalProps
  extends FormHTMLAttributes<HTMLFormElement> {
  collection_id: string;
}

interface DocumentTableColumn {
  name: string;
  type: 'varchar' | 'text';
}
const DocumentStructureModal: React.FC<DocumentStructureModalProps> = ({
  collection_id,
}) => {
  const [fieldname, setFieldName] = useState('');
  const [documentTableTextField, setDocumentTableTextField] = useState<
    DocumentTableColumn[]
  >([]);

  const [documentTableVarcharField, setDocumentTableVarcharField] = useState<
    DocumentTableColumn[]
  >([]);

  const handleAddVarcharField = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (documentTableVarcharField.length < 8) {
        setDocumentTableVarcharField([
          ...documentTableVarcharField,
          { name: fieldname.split(' ')[0], type: 'varchar' },
        ]);
      }
    },
    [documentTableVarcharField, fieldname],
  );

  const handleAddTextField = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (documentTableTextField.length < 8) {
        setDocumentTableTextField([
          ...documentTableTextField,
          { name: fieldname.split(' ')[0], type: 'text' },
        ]);
      }
    },
    [documentTableTextField, fieldname],
  );
  return (
    <Container>
      <h2>Digite os campos dos documentos</h2>
      <Content>
        <InputBlock>
          <Label htmlFor="fieldname">Nome do campo</Label>

          <div>
            <span>Máximo de 300 catacteres</span>
            <input
              id="fieldname"
              value={fieldname}
              onChange={e => setFieldName(e.target.value)}
            />
          </div>
          <a
            href="sadsa"
            onClick={(event: FormEvent) => handleAddVarcharField(event)}
          >
            <AiFillPlusCircle size={30} color="#43B05C" />
          </a>
        </InputBlock>

        <Label htmlFor="">Campos: </Label>
        <DocumentFieldsContainer>
          {documentTableVarcharField.map((varcharField, i) => (
            <DocumentField colortype={varcharField.type} href="" key={i}>
              {varcharField.name}
            </DocumentField>
          ))}
        </DocumentFieldsContainer>
      </Content>
      <Content>
        <InputBlock>
          <Label htmlFor="fieldname">Nome do campo</Label>

          <div>
            <span>Máximo de 500 catacteres</span>
            <input id="fieldname" />
          </div>
          <a
            href="sadsa"
            onClick={(event: FormEvent) => handleAddTextField(event)}
          >
            <AiFillPlusCircle size={30} color="#43B05C" />
          </a>
        </InputBlock>

        <Label htmlFor="">Campos: </Label>
        <DocumentFieldsContainer>
          {documentTableTextField.map((textfield, i) => (
            <DocumentField colortype={textfield.type} href="" key={i}>
              {textfield.name}
            </DocumentField>
          ))}
        </DocumentFieldsContainer>
      </Content>
    </Container>
  );
};

export default DocumentStructureModal;
