import React, { useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { CgFileDocument } from 'react-icons/cg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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
  const [show] = useState(true);
  const [collectionData, setCollectionData] = useState<CollectionProps[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const loadAPIData = useCallback(async () => {
    const response = await api.get('/collection/search');

    setCollectionData(response.data);
  }, []);

  useEffect(() => {
    loadAPIData();
  }, [loadAPIData]);

  const animatedElipse = useTransition(show, null, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: 'scale(0)',
      top: '-500px',
      right: '-500px',
    },
    enter: { opacity: 1, transform: 'scale(1)', top: '0', right: '4px' },
    leave: { opacity: 0 },
  });

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
          {animatedElipse.map(({ item, key, props }) => (
            <animated.img
              key={key}
              style={props}
              src={elipseSrc}
              alt="Bola_azul"
            />
          ))}
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
              <div key={collection.id}>
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
