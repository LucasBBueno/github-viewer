import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 0.4rem;
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    width: 60rem;
    height: 32rem;
  }
`;

export const Title = styled.h1`
  font: 400 1.6rem OratorStd;
  color: #75bcad;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (min-width: 700px) {
    font-size: 3rem;
  }
`;

export const Description = styled.span`
  font: 400 1rem Roboto-Regular;
  color: #537990;
  margin-top: 1rem;
  padding: 0 1rem;

  @media (min-width: 700px) {
    font-size: 1.6rem;
    margin-top: 8rem;
    padding: 0 3rem;
  }
`;

export const Counts = styled.div`
  margin: 2rem 0;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;

    span {
      display: block;
      font: 400 1.4rem OratorStd;
      color: #003959;
    }

    strong {
      margin-top: 1rem;
      display: block;
      font: 700 1rem Roboto-Bold;
      color: #ee7656;
    }

    @media (min-width: 700px) {
      span {
        font-size: 2.4rem;
        margin-top: 4rem;
      }

      strong {
        font-size: 1.8rem;
      }
    }
  }
`;
