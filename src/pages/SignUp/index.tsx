/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Wrapper, ImageContainer, Content, Box } from './styles';
import logoSrc from '../../assets/logoUemg.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErros';
import doodleSrc from '../../assets/doodleSignup.jpg';

interface SignupData {
  name: string;
  email: string;
  password: string;
  registerType: number;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handdleSubmit = useCallback(
    async (data: SignupData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          password: Yup.string().required('Senha Obrigatória'),
          email: Yup.string().required('E-mail Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        addToast({
          type: 'sucess',
          title: 'Cadastro Realizado',
          description: 'Cadastro realizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na validação',
          description:
            'Ocorreu um erro ao cadastrar, cheque suas informações obrigatórias! ',
        });
      }
    },
    [addToast],
  );
  return (
    <Wrapper>
      <Content>
        <Box>
          <img src={logoSrc} alt="" />
          <Form onSubmit={handdleSubmit} ref={formRef}>
            <Input name="name" placeholder="Digite seu nome" icon={FaUserAlt} />
            <Input
              name="email"
              placeholder="Digite seu e-mail"
              icon={FaEnvelope}
            />

            <Input
              name="password"
              placeholder="Digite sua senha"
              icon={FaLock}
              type="password"
            />

            <Select name="registerType">
              <option value="-">Selecione seu tipo de registro</option>
              <option value="1">Administrador</option>
              <option value="2">Bolsista</option>
              <option value="3">Estagiario</option>
            </Select>
            <Button type="submit">Criar Sua Conta</Button>
            <Link to="/">Já tenho uma conta</Link>
          </Form>
        </Box>
      </Content>
      <ImageContainer>
        <img src={doodleSrc} alt="" />
      </ImageContainer>
    </Wrapper>
  );
};

export default SignUp;
