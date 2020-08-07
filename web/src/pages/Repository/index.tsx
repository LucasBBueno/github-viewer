import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/githubApi';

import Header from '../../components/Header';

import { Container, Content, Title, Description, Counts } from './styles';

interface RepositoryParams {
  full_name: string;
}

interface Repository {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.full_name}`).then(response => {
      setRepository(response.data);
    });
  }, [params.full_name]);

  return (
    <Container>
      <Header>
        <Content>
          {repository && (
            <>
              <Title>{repository.name}</Title>
              <Description>{repository.description}</Description>

              <Counts>
                <ul>
                  <li>
                    <span>Stars</span>

                    <strong>{repository.stargazers_count}</strong>
                  </li>

                  <li>
                    <span>Forks</span>

                    <strong>{repository.forks_count}</strong>
                  </li>

                  <li>
                    <span>Issues</span>

                    <strong>{repository.open_issues_count}</strong>
                  </li>
                </ul>
              </Counts>
            </>
          )}
        </Content>
      </Header>
    </Container>
  );
};

export default Repository;
