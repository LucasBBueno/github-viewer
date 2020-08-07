import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  background: #e0dfda;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 700px;
  width: 100%;
`;

export const Title = styled.h1`
  width: 15rem;
  color: #537990;
  font: 700 1.6rem Roboto-Bold;

  @media (min-width: 700px) {
    font-size: 4rem;
    width: 40rem;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 2rem;
  display: flex;

  input {
    flex: 1;
    border: 0;
    height: 3rem;
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 0 1rem;
    font-size: 0.9rem;
    border: 0.2rem solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #ced5da;
    }
  }

  button {
    background: #537990;
    border: 0;
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 0 1rem;
    font-size: 1rem;
    color: #fff;
  }

  @media (min-width: 700px) {
    input {
      height: 5rem;
      font-size: 1.6rem;
    }

    button {
      font-size: 1.6rem;
      width: 15.8rem;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  font: 400 1rem Roboto-Regular;

  @media (min-width: 700px) {
    font-size: 1.4rem;
  }
`;

export const User = styled.div`
  background: #ffff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  height: 8rem;
  max-width: 100%;

  display: flex;
  align-items: center;

  img {
    width: 5rem;
    height: 4rem;
    border-radius: 50%;
    padding: 0 0.7rem;
  }

  span {
    font: 400 1.2rem OratorStd;
    padding: 0.5rem 0.5rem;
    color: #ee7656;
  }

  p {
    padding: 0.5rem 0.5rem;
    font: 400 0.8rem Roboto-Regular;
    color: #537990;
    width: 0 auto;
  }

  @media (min-width: 700px) {
    height: 16rem;
    margin-top: 3rem;

    img {
      padding: 0 0.7rem;
      height: 10rem;
      width: 11rem;
    }

    span {
      font-size: 2rem;
      padding: 0.8rem 0.8rem;
    }

    p {
      font-size: 1.4rem;
      padding: 0.8rem 0.8rem;
    }
  }
`;

export const UserInfo = styled.div``;

export const Counts = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    flex-wrap: wrap;

    span {
      font: 700 1.1rem Roboto-Bold;
      display: block;
      color: #ee7656;
    }

    strong {
      margin-top: 1rem;
      display: block;
      color: #537990;
      font: 400 1.6rem Roboto-Regular;
    }
  }

  @media (min-width: 700px) {
    ul {
      span {
        font-size: 2rem;
      }

      strong {
        font-size: 2.6rem;
      }
    }
  }
`;

export const Repositories = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 2rem;
  margin-top: 8rem;

  a {
    padding: 0.5rem 1rem;
    background: #fff;
    border-radius: 0.5rem;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & + a {
      margin-top: 1rem;
    }

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        font: 400 1.2rem OratorStd;
        color: #75bcad;
      }

      p {
        margin-top: 1rem;
        font: 400 1rem Roboto-Regular;
        color: #537990;
        max-width: 95%;
      }
    }

    svg {
      color: #ee7656;
    }
  }

  @media (min-width: 700px) {
    padding: 0;
    margin-top: 18rem;

    a {
      height: 10rem;

      & + a {
        margin-top: 1.5rem;
      }

      div {
        padding-left: 1rem;

        span {
          font-size: 2rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
