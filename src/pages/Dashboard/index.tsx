import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { CgFileDocument } from 'react-icons/cg';
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

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [show] = useState(true);
  const animatedElipse = useTransition(show, null, {
    from: {
      position: 'absolute',
      transform: 'scale(0)',
      top: '-500px',
      right: '-500px',
    },
    enter: { opacity: 1, transform: 'scale(1)', top: '0', right: '0' },
    leave: { opacity: 0 },
  });

  const boxtransiction = useTransition(show ? data : [], item => item, {
    unique: true,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <Wrapper>
      {animatedElipse.map(({ item, key, props }) => (
        <animated.img key={key} style={props} src={elipseSrc} alt="Bola_azul" />
      ))}
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
        <Section>
          {boxtransiction.map(({ item, key, props }) => (
            <animated.div key={key} style={{ ...props }}>
              <CgFileDocument size={50} color="#000" />
              <span>Acervo Hostilio Soares</span>
            </animated.div>
          ))}
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
