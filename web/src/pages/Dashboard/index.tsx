import React, { useState, useCallback, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/githubApi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Title,
  Form,
  Error,
  User,
  UserInfo,
  Counts,
  Repositories,
} from './styles';

interface GithubUser {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  description: string;
  full_name: string;
}

const Dashboard: React.FC = () => {
  const [userName, setUsername] = useState('');
  const [inputError, setInputError] = useState('');
  const [githubUser, setGithubUser] = useState<GithubUser | null>(() => {
    const storagedUser = localStorage.getItem('@GithubViewer:user');

    if (storagedUser) {
      return JSON.parse(storagedUser);
    }

    return null;
  });
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubViewer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubViewer:user', JSON.stringify(githubUser));
  }, [githubUser]);

  useEffect(() => {
    localStorage.setItem(
      '@GithubViewer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddGithubUser = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setGithubUser(null);
      setRepositories([]);

      if (!userName) {
        setInputError('Digite o nome do usuário');
        return;
      }

      api
        .get(`/users/${userName}`)
        .then(response => {
          const user = response.data;

          setGithubUser(user);

          api
            .get<Repository[]>(`/users/${userName}/repos`)
            .then(repositoryResponse => {
              const responseRepositories = repositoryResponse.data;

              setRepositories(responseRepositories);
            });
        })
        .catch(() =>
          setInputError('Não foi encontrado usuário com o username digitado.'),
        );

      setUsername('');
      setInputError('');
    },
    [userName],
  );

  return (
    <Container>
      <Header>
        <Content>
          <Title>Explore repositórios no Github</Title>

          <Form hasError={!!inputError} onSubmit={handleAddGithubUser}>
            <input
              value={userName}
              onChange={e => setUsername(e.target.value)}
              placeholder="Digite o nome do usuário"
            />

            <button type="submit">Pesquisar</button>
          </Form>

          {inputError && <Error>{inputError}</Error>}

          {githubUser && (
            <>
              <User>
                <img src={githubUser.avatar_url} alt={githubUser.name} />
                <UserInfo>
                  <span>{githubUser.name}</span>
                  <p>{githubUser.bio}</p>
                </UserInfo>
              </User>
              <Counts>
                <ul>
                  <li>
                    <span>Repositórios</span>
                    <strong>{githubUser.public_repos}</strong>
                  </li>
                  <li>
                    <span>Seguidores</span>
                    <strong>{githubUser.followers}</strong>
                  </li>
                  <li>
                    <span>Seguindo</span>
                    <strong>{githubUser.following}</strong>
                  </li>
                </ul>
              </Counts>
            </>
          )}
        </Content>
      </Header>

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.name}
            to={`/repository/${repository.full_name}`}
          >
            <div>
              <span>{repository.name}</span>

              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </Container>
  );
};

export default Dashboard;
