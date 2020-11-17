/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import Sidebar from '../../components/Sidebar';
import {
  Container,
  InputGroupCustomContainer,
  CreateCollectionForm,
  ImageContainer,
  InputBlock,
  RequiredFieldset,
  NonRequiredFieldset,
} from './styles';
import LoadingAnimation from '../../components/LoadingAnimation';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import DocumentInput from '../../components/DocumentInput';
import DocumentTextArea from '../../components/DocumentTextArea';
import { useToast } from '../../hooks/toast';

interface CustomDocumentField {
  displayName?: string;
  column_name: string;
  data_type: 'character varying' | 'text';
}
interface RouteParams {
  id: string;
  document_id?: string;
}
const UpdateDocument: React.FC = () => {
  const { token, user } = useAuth();

  const params = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const formRef = useRef<FormHandles>({} as FormHandles);

  const [shortTextFields, setShortTextFields] = useState<CustomDocumentField[]>(
    [],
  );

  const [longTextField, setLongTextField] = useState<CustomDocumentField[]>([]);
  const [documentData, setDocumentData] = useState<any>([]);

  const [images, setImages] = useState<File[]>([]);
  const [selectedImagesPreview, setSelectedImagesPreview] = useState<string[]>(
    [],
  );

  const { push } = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadDocumentFields() {
      const response = await api.get<CustomDocumentField[]>(
        `documents/structure/${params.id}`,
        {
          headers: { Authorization: token },
        },
      );

      const varcharTextFields = response.data
        .filter(
          field =>
            field.data_type === 'character varying' &&
            field.column_name !== 'id' &&
            field.column_name !== 'titulo' &&
            field.column_name !== 'autor',
        )
        .map(field => {
          let displayName =
            field.column_name.charAt(0).toUpperCase() +
            field.column_name.slice(1);
          displayName = displayName.replace('_', ' ');
          return {
            displayName,
            column_name: field.column_name,
            data_type: field.data_type,
          } as CustomDocumentField;
        });

      const fullTextFields = response.data
        .filter(
          field =>
            field.data_type === 'text' && field.column_name !== 'observacoes',
        )
        .map(field => {
          let displayName =
            field.column_name.charAt(0).toUpperCase() +
            field.column_name.slice(1);
          displayName = displayName.replace('_', ' ');
          return {
            displayName,
            column_name: field.column_name,
            data_type: field.data_type,
          } as CustomDocumentField;
        });

      setShortTextFields(varcharTextFields);
      setLongTextField(fullTextFields);
    }

    async function loadDocumentData() {
      const response = await api.get<CustomDocumentField[]>(
        `documents/data/${params.id}/doc`,
        {
          params: { documentId: params.document_id },
          headers: { Authorization: token },
        },
      );

      if (!response.data[0]) {
        addToast({
          type: 'error',
          title: 'Documento Incorreto',
          description: 'Nao foi encontrado dado nesta URL',
        });
        push(`/acervo/${params.id}`);
        return;
      }

      setDocumentData(response.data[0]);
      formRef.current.setData(response.data[0]);
    }

    loadDocumentFields();
    loadDocumentData();
    setLoading(false);
  }, [addToast, params.document_id, params.id, push, token]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const files = Array.from(event.target.files);

    setImages(files);

    const imagesPreview = files.map(file => {
      return URL.createObjectURL(file);
    });

    setSelectedImagesPreview(imagesPreview);
  }

  async function handleSubmit(data: object) {
    const formData = new FormData();
    images.forEach(image => formData.append('images', image));

    try {
      await api.post(`documents/data/${params.id}`, data, {
        headers: { Authorization: token },
      });

      addToast({
        type: 'sucess',
        title: 'Documento Cadastrado',
        description: 'O Documento foi cadastrado corretamente!',
      });
      push(`/acervo/${params.id}`);
    } catch {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description:
          'Ocorreu um erro ao cadastrar documento, cheque os dados obrigatorios ',
      });
    }
  }

  return (
    <Container>
      <Sidebar />

      {loading ? (
        <LoadingAnimation visible />
      ) : (
        <main>
          <CreateCollectionForm onSubmit={handleSubmit} ref={formRef}>
            <RequiredFieldset>
              <legend>Campos obrigatórios</legend>

              <InputBlock>
                <label>Título</label>
                <DocumentInput name="titulo" disabled={user.registerType > 1} />
              </InputBlock>

              <InputBlock>
                <label>Autor</label>
                <DocumentInput name="autor" disabled={user.registerType > 1} />
              </InputBlock>
              <InputBlock>
                <label>
                  Observações
                  <span>Máximo de 500 caracteres</span>
                </label>
                <DocumentTextArea
                  name="observacoes"
                  maxLength={500}
                  disabled={user.registerType > 1}
                />
              </InputBlock>

              <InputBlock>
                <label>Fotos</label>

                <ImageContainer>
                  {selectedImagesPreview.map(image => (
                    <img key={image} src={image} alt="Imagem documento" />
                  ))}

                  <label htmlFor="image[]" className="new-image">
                    <FiPlus size={24} color="#15b6d6" />
                  </label>
                </ImageContainer>

                <input
                  type="file"
                  id="image[]"
                  multiple
                  onChange={handleSelectImages}
                  disabled={user.registerType > 1}
                />
              </InputBlock>
            </RequiredFieldset>

            <NonRequiredFieldset>
              <legend>Campos personalizados</legend>
              <InputGroupCustomContainer type="varchar">
                {shortTextFields.map((shortTextField, index) => (
                  <InputBlock key={index}>
                    <label>{shortTextField.displayName}</label>
                    <DocumentInput
                      name={shortTextField.column_name}
                      disabled={user.registerType > 1}
                    />
                  </InputBlock>
                ))}
              </InputGroupCustomContainer>
              <InputGroupCustomContainer>
                {longTextField.map(longText => (
                  <InputBlock>
                    <label>
                      {longText.displayName}
                      <span>Máximo de 500 caracteres</span>
                    </label>
                    <DocumentTextArea
                      name={longText.column_name}
                      maxLength={500}
                      disabled={user.registerType > 1}
                    />
                  </InputBlock>
                ))}
              </InputGroupCustomContainer>
            </NonRequiredFieldset>

            <button className="confirm-button" type="submit" disabled>
              Confirmar
            </button>
          </CreateCollectionForm>
        </main>
      )}
    </Container>
  );
};

export default UpdateDocument;
