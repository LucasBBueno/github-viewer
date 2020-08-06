import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/welcome-background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  padding: 0 2rem;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1.5s;

  img {
    height: 8rem;
    width: auto;
  }

  span {
    margin: 6rem 0;
    font-size: 1.2rem;
    color: #003959;
  }

  button {
    background: #ee7656;
    color: #ffff;
    border-radius: 5px;
    border: 0;
    height: 3rem;
    width: 15rem;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    svg {
      color: #ffff;
    }

    &:hover {
      background: ${shade(0.2, '#ee7656')};
    }
  }

  @media (min-width: 700px) {
    img {
      height: 15rem;
    }

    span {
      margin: 10rem 0;
      font-size: 2rem;
    }

    button {
      height: 5rem;
      width: 25rem;
      font-size: 2rem;
    }
  }
`;

const appearBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;

  animation: ${appearBackground} 1.5s;
`;
