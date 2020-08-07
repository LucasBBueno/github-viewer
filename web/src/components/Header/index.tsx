import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Container, NavBar, Content } from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  const history = useHistory();

  return (
    <Container>
      <NavBar>
        <button type="button" onClick={history.goBack}>
          <FiChevronLeft size={24} />

          <span>Voltar</span>
        </button>

        <img src={logoImg} alt="Github Viewer" />
      </NavBar>

      <Content>{children}</Content>
    </Container>
  );
};

export default Header;
