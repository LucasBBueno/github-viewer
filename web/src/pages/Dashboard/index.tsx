import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Title,
  Form,
  User,
  UserInfo,
  Counts,
  Repositories,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Content>
          <Title>Explore repositórios no Github</Title>

          <Form>
            <input
              value=""
              onChange={() => console.log('Teste')}
              placeholder="Digite o nome do usuário"
            />

            <button type="button">Pesquisar</button>
          </Form>

          <User>
            <img
              src="https://avatars0.githubusercontent.com/u/45021630?s=460&u=25d45893c9bdbb8680f7271fec8cf32c2f26a20c&v=4"
              alt="User"
            />
            <UserInfo>
              <span>Lucas Bueno</span>
              <p>
                Developer looking to improve my programming skills, especially
                in mobile development with React Native and Javascript.
              </p>
            </UserInfo>
          </User>
          <Counts>
            <ul>
              <li>
                <span>Repositórios</span>
                <strong>20</strong>
              </li>
              <li>
                <span>Seguidores</span>
                <strong>13</strong>
              </li>
              <li>
                <span>Seguindo</span>
                <strong>10</strong>
              </li>
            </ul>
          </Counts>
        </Content>
      </Header>

      <Repositories>
        <a href="detail">
          <div>
            <span>weatherapp</span>

            <p>
              A React Native app using TypeScript to view current weather for
              your location
            </p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="detail">
          <div>
            <span>weatherapp</span>

            <p>
              A React Native app using TypeScript to view current weather for
              your location
            </p>
          </div>

          <FiChevronRight size={24} />
        </a>
        <a href="detail">
          <div>
            <span>weatherapp</span>

            <p>
              A React Native app using TypeScript to view current weather for
              your location
            </p>
          </div>

          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </Container>
  );
};

export default Dashboard;
