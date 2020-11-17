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
  ProfilePictureContainer,
} from './styles';
import LoadingAnimation from '../../components/LoadingAnimation';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import DocumentInput from '../../components/DocumentInput';
import DocumentTextArea from '../../components/DocumentTextArea';
import { useToast } from '../../hooks/toast';

interface RouteParams {
  id: string;
}
interface ProfileProps {
  name: string;
  email: string;
  avatar: string;
}
const UpdateProfile: React.FC = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(true);
  const params = useParams<RouteParams>();
  const formRef = useRef<FormHandles>({} as FormHandles);
  const { push } = useHistory();
  const { addToast } = useToast();

  const [profileProps, setProfileProps] = useState<ProfileProps>();

  useEffect(() => {
    async function loadApiData() {
      const response = await api.get('/profile', {
        headers: { Authorization: token },
      });

      setProfileProps(response.data);
      formRef.current.setData(response.data);
    }
    setLoading(false);
    loadApiData();
  }, [token]);

  return (
    <Container>
      <Sidebar />

      {loading ? (
        <LoadingAnimation visible />
      ) : (
        <main>
          <CreateCollectionForm
            onSubmit={() => {}}
            initialData={profileProps}
            ref={formRef}
          >
            <ProfilePictureContainer htmlFor="profile-picture[]">
              <img
                key=""
                src={
                  profileProps?.avatar
                    ? `http://localhost:3334/images/${profileProps?.avatar}`
                    : 'https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg'
                }
                alt="Imagem documento"
              />
              <input type="file" id="profile-picture[]" />
            </ProfilePictureContainer>

            <RequiredFieldset>
              <legend>{profileProps?.name}</legend>

              <InputBlock>
                <label>Nome</label>
                <DocumentInput name="name" />
              </InputBlock>

              <InputBlock>
                <label>Email</label>
                <DocumentInput name="email" />
              </InputBlock>

              <InputBlock>
                <label>Senha</label>
                <DocumentInput name="password" type="password" />
              </InputBlock>

              <InputBlock>
                <label>Confirmaçao de senha</label>
                <DocumentInput name="old_password" type="password" />
              </InputBlock>
            </RequiredFieldset>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </CreateCollectionForm>
        </main>
      )}
    </Container>
  );
};

export default UpdateProfile;
