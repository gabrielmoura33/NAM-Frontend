/* eslint-disable react/no-array-index-key */
import React, {
  FormHTMLAttributes,
  useState,
  useCallback,
  FormEvent,
} from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import {
  Container,
  Content,
  InputBlock,
  Label,
  DocumentFieldsContainer,
  DocumentField,
  SubmitButton,
} from './styles';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/auth';

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
  const { token } = useAuth();

  const [fieldNameText, setFieldNameText] = useState('');
  const { addToast } = useToast();
  const history = useHistory();

  const [documentTableTextField, setDocumentTableTextField] = useState<
    DocumentTableColumn[]
  >([
    {
      name: 'observacoes',
      type: 'text',
    },
  ]);

  const [documentTableVarcharField, setDocumentTableVarcharField] = useState<
    DocumentTableColumn[]
  >([
    {
      name: 'titulo',
      type: 'varchar',
    },
    {
      name: 'autor',
      type: 'varchar',
    },
  ]);

  const handleAddVarcharField = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (documentTableVarcharField.length < 8 && fieldname !== '') {
        setDocumentTableVarcharField([
          ...documentTableVarcharField,
          { name: fieldname.replace(' ', '_').toLowerCase(), type: 'varchar' },
        ]);
      }
    },
    [documentTableVarcharField, fieldname],
  );

  const handleAddTextField = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (documentTableTextField.length < 8 && fieldNameText !== '') {
        setDocumentTableTextField([
          ...documentTableTextField,
          { name: fieldNameText.replace(' ', '_').toLowerCase(), type: 'text' },
        ]);
      }
    },
    [documentTableTextField, fieldNameText],
  );

  const handleSubmit = async () => {
    try {
      const tableColumns = documentTableVarcharField.concat(
        documentTableTextField,
      );

      await api.post(
        'documents/structure/',
        {
          collectionId: collection_id,
          tableColumns: [...tableColumns],
        },
        {
          headers: { Authorization: token },
        },
      );

      addToast({
        type: 'sucess',
        title: 'Cadastro de acervo  Realizado',
        description: 'Cadastro realizado com sucesso!',
      });

      history.push('/');
    } catch {
      addToast({
        type: 'error',
        title: 'Atencao',
        description: 'Erro no cadastro dos campos dos documentos!',
      });
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
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
            <DocumentField colortype={varcharField.type} key={i}>
              {varcharField.name}
            </DocumentField>
          ))}
        </DocumentFieldsContainer>
      </Content>
      <Content>
        <InputBlock>
          <Label htmlFor="fieldnameText">Nome do campo</Label>

          <div>
            <span>Máximo de 500 catacteres</span>
            <input
              id="fieldnameText"
              value={fieldNameText}
              onChange={e => setFieldNameText(e.target.value)}
            />
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
            <DocumentField colortype={textfield.type} key={i}>
              {textfield.name}
            </DocumentField>
          ))}
        </DocumentFieldsContainer>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Content>
    </Container>
  );
};

export default DocumentStructureModal;
