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
  const [show, _] = useState(false);
  const { user } = useAuth();
  const [open, set] = useState(true);

  const elipseAnimated = useTransition(show, null, {
    from: {
      position: 'absolute',
      transform: 'scale(0)',
      top: '-500px',
      right: '-500px',
    },
    enter: { opacity: 1, transform: 'scale(1)', top: '0', right: '0' },
    leave: { opacity: 0 },
  });

  return (
    <Wrapper>
      <Menu />
      <Container>
        {elipseAnimated.map(({ item, key, props }) => (
          <animated.img key={key} style={props} src={elipseSrc} alt="" />
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
