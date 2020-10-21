/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormHTMLAttributes, useState, useCallback } from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

import { Container, InputBlock, Label, SubmitButton } from './styles';

interface CollectionProps extends FormHTMLAttributes<HTMLFormElement> {
  coverImg: File | undefined;
  setModalContent: React.Dispatch<React.SetStateAction<string>>;
  setCollecitonId: React.Dispatch<React.SetStateAction<string>>;
}
const CollectionModal: React.FC<CollectionProps> = ({
  coverImg,
  setModalContent,
  setCollecitonId,
}) => {
  const [collectionName, setCollectionName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const { addToast } = useToast();

  const handleApiSubmit = useCallback(async () => {
    try {
      if (!coverImg) {
        throw new Error(`Image is necessary`);
      }
      const data = new FormData();
      data.append('email', email);
      data.append('about', about);
      data.append('collectionName', collectionName);
      data.append('image', coverImg);

      const response = await api.post('collection', data);

      setCollecitonId(String(response.data.id));

      addToast({
        type: 'sucess',
        title: 'Cadastro Realizado',
        description: 'Cadastro realizado com sucesso!',
      });
      setModalContent('documentStructure');
    } catch {
      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description:
          'Ocorreu um erro ao cadastrar o acervo, verifique os dados e tente novamente',
      });
    }
  }, [
    about,
    addToast,
    collectionName,
    coverImg,
    email,
    setCollecitonId,
    setModalContent,
  ]);
  return (
    <Container onSubmit={handleApiSubmit}>
      <InputBlock>
        <Label htmlFor="name">Digite o nome do acervo</Label>
        <input
          id="name"
          value={collectionName}
          onChange={e => setCollectionName(e.target.value)}
        />
      </InputBlock>

      <InputBlock>
        <Label htmlFor="email">Escolha o responsável pelo acervo</Label>
        <input
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputBlock>

      <InputBlock className="text-area">
        <Label htmlFor="about">
          Sobre o acervo:
          <span>Máximo de 300 caracteres</span>
        </Label>
        <textarea
          id="about"
          value={about}
          onChange={e => setAbout(e.target.value)}
        />

        <SubmitButton type="submit">
          <IoIosArrowDroprightCircle size={64} color="#007EA7" />
        </SubmitButton>
      </InputBlock>
    </Container>
  );
};

export default CollectionModal;
