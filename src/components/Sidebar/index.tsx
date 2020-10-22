import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoUemg from '../../assets/image26.svg';

const Sidebar: React.FC = () => {
  const history = useHistory();
  return (
    <aside className="app-sidebar">
      <img src={logoUemg} alt="Logo Happy" />

      <footer>
        <button type="button" onClick={() => history.push('/dashboard')}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;
