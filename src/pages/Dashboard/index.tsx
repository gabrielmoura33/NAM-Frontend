import React, { useState, useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import { GrDocumentText } from 'react-icons/gr';
import {
  Container,
  Wrapper,
  Header,
  BellIcon,
  Section,
  WelcomeSection,
  ProfileSection,
} from './styles';
import Menu from '../../components/Menu';
import elipseSrc from '../../assets/elipse.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Wrapper>
      <Menu />
      <Container>
        <Header>
          <WelcomeSection>
            <h1>
              Seja Bem vindo(a),
              <br />
            </h1>
            <p>{user.name}</p>
          </WelcomeSection>
          <ProfileSection>
            <input type="text" />

            <BellIcon />

            <div>
              <img
                src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
                alt=""
              />
              <span>Editar Perfil</span>
            </div>
          </ProfileSection>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
