import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import MenuField from './MenuField';
import logoSrc from '../../assets/logo-uemg2.png';

const menuList = [
  {
    icon: AiOutlineHome,
    text: 'Página Inicial',
    accessLevel: 0,
  },
  {
    icon: AiOutlineHome,
    text: 'Acervos',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Importar Excel',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Nova Obra',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Histórico ',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Usuários',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Usuários',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Usuários',
    accessLevel: 1,
  },
  {
    icon: AiOutlineHome,
    text: 'Sair',
    accessLevel: 1,
  },
];
const Menu: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <img src={logoSrc} alt="Uemg" />

      {menuList
        .filter(menuItem => menuItem.accessLevel <= user.registerType)
        .map(menuItem => (
          <MenuField icon={menuItem.icon} text={menuItem.text} />
        ))}
    </Container>
  );
};

export default Menu;
