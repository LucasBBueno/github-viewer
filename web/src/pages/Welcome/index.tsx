import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Content, AnimationContent, Background } from './styles';

const Welcome: React.FC = () => {
  const history = useHistory();

  const handleGoToDashboard = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  return (
    <Container>
      <Content>
        <AnimationContent>
          <img src={logoImg} alt="Github Viewer" />

          <span>Uma aplicação para listagem de repositórios do github.</span>

          <button type="button" onClick={handleGoToDashboard}>
            Acessar
            <FiChevronRight size={20} />
          </button>
        </AnimationContent>
      </Content>

      <Background />
    </Container>
  );
};

export default Welcome;
