import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { RiFileExcel2Line } from 'react-icons/ri';
import { BsMusicNoteBeamed, BsClockHistory } from 'react-icons/bs';
import { FaUsers, FaBuffer } from 'react-icons/fa';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';
import MenuField from './MenuField';
import logoSrc from '../../assets/logo-uemg2.png';

const menuList = [
  {
    icon: AiOutlineHome,
    text: 'Página Inicial',
    accessLevel: 0,
    action: '/',
  },
  {
    icon: FaBuffer,
    text: 'Acervos',
    accessLevel: 1,
    action: '/acervos',
  },
  {
    icon: RiFileExcel2Line,
    text: 'Importar Excel',
    accessLevel: 1,
    action: '/importar-excel',
  },
  {
    icon: BsMusicNoteBeamed,
    text: 'Nova Obra',
    accessLevel: 1,
    action: 'nova-obra',
  },
  {
    icon: BsClockHistory,
    text: 'Histórico ',
    accessLevel: 1,
    action: 'historico',
  },
  {
    icon: FaUsers,
    text: 'Usuários',
    accessLevel: 1,
    action: '/usuarios',
  },

  {
    icon: BiExit,
    text: 'Sair',
    accessLevel: 1,
    action: '/logout',
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
          <MenuField
            key={menuItem.text}
            icon={menuItem.icon}
            text={menuItem.text}
            action={menuItem.action}
          />
        ))}
    </Container>
  );
};

export default Menu;
