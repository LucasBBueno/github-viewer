import styled from 'styled-components';

import githubImg from '../../assets/github-background.svg';

export const Container = styled.div`
  background: #facca4;
  width: 100%;
  height: 25rem;
  padding: 0 2rem;
  margin-bottom: 7rem;

  @media (min-width: 700px) {
    background: #facca4 url(${githubImg}) no-repeat 70% top;
    padding: 0 8rem;
    height: 45rem;
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 3rem;

  button {
    background: 0;
    border: 0;
    display: flex;
    align-items: center;

    svg {
      color: #537990;
    }

    span {
      color: #fff;
      font: 700 1.3rem Roboto-Bold;
    }
  }

  img {
    height: 5rem;
  }

  @media (min-width: 700px) {
    padding-top: 5rem;

    button {
      span {
        font-size: 2rem;
      }
    }

    img {
      height: 10rem;
    }
  }
`;

export const Content = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
