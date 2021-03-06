/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Wrapper, ImageContainer, Content, Box } from './styles';
import logoSrc from '../../assets/logoUemg.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';
import doodleSrc from '../../assets/doodle.jpg';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('E-Mail obrigatório'),
          password: Yup.string().required('Senha Obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais ',
        });
      }
    },
    [signIn, addToast],
  );
  return (
    <Wrapper>
      <ImageContainer>
        <img src={doodleSrc} alt="" />
      </ImageContainer>
      <Content>
        <Box>
          <img src={logoSrc} alt="" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Input
              name="email"
              placeholder="Digite seu e-mail"
              icon={FaEnvelope}
            />
            <Input
              name="password"
              type="password"
              placeholder="Digite sua senha"
              icon={FaLock}
            />
            <Button type="submit">Entrar</Button>
            <Link to="/signup">Crie sua conta</Link>
          </Form>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
