/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormHTMLAttributes } from 'react';

import { Container, InputBlock, Label } from './styles';

interface CollectionProps extends FormHTMLAttributes<HTMLFormElement> {
  coverImg: File | undefined;
}
const CollectionModal: React.FC<CollectionProps> = ({ coverImg }) => {
  return (
    <Container>
      <InputBlock>
        <Label htmlFor="name">Digite o nome do acervo</Label>
        <input id="name" value="name" />
      </InputBlock>

      <InputBlock>
        <Label htmlFor="admin">Escolha o responsável pelo acervo</Label>
        <input id="admin" />
      </InputBlock>

      <InputBlock className="text-area">
        <Label htmlFor="about">
          Sobre o acervo:
          <span>Máximo de 300 caracteres</span>
        </Label>
        <textarea id="about" />
      </InputBlock>
    </Container>
  );
};

export default CollectionModal;
