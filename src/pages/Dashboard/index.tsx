/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect, useCallback } from 'react';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Header,
  Section,
  WelcomeSection,
  ProfileSection,
} from './styles';
import Menu from '../../components/Menu';
import elipseSrc from '../../assets/elipse.svg';
import { useAuth } from '../../hooks/auth';
import Notifications from '../../components/Notification';
import api from '../../services/api';
import CreateCollectionModal from '../../components/CreateModal';

interface CollectionProps {
  name: string;
  id: string;
}
const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [collectionData, setCollectionData] = useState<CollectionProps[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const history = useHistory();
  const loadAPIData = useCallback(async () => {
    const response = await api.get('/collection/search');

    setCollectionData(response.data);
  }, []);

  useEffect(() => {
    loadAPIData();
  }, [loadAPIData]);

  const handleShowModal = useCallback(() => {
    setModalVisibility(true);
  }, []);
  return (
    <>
      {modalVisibility && (
        <CreateCollectionModal
          visibility={modalVisibility}
          setModalVisibility={setModalVisibility}
        />
      )}
      <Wrapper>
        <Menu />

        <Container>
          <img src={elipseSrc} alt="Bola_azul" />
          <Header>
            <WelcomeSection>
              <h1>
                Seja Bem vindo(a),
                <br />
              </h1>
              <p>{user.name}</p>
            </WelcomeSection>
            <ProfileSection>
              <input type="text" placeholder="Filtrar...." />
              <Notifications />

              <div>
                <img
                  src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
                  alt=""
                />
                <Link to="/">Editar Perfil</Link>
              </div>
            </ProfileSection>
          </Header>
          <Section>
            {collectionData.map(collection => (
              <div
                key={collection.id}
                onClick={() => history.push(`/acervos/${collection.id}`)}
              >
                <CgFileDocument size={50} color="#000" />
                <span>{collection.name}</span>
              </div>
            ))}
            <div onClick={handleShowModal}>
              <AiOutlinePlusCircle size={50} color="#000" />
            </div>
          </Section>
        </Container>
      </Wrapper>
    </>
  );
};

export default Dashboard;
