import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, NavBar, Content } from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <Container>
      <NavBar>
        <button type="button" onClick={() => console.log('voltar Welcome')}>
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
