import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 4rem;
  width: 90vw;

  h1 {
    color: #b5b7b7;
    font-size: 0.9rem;
    padding: 0.3rem 0;
    border-top: solid 0.01rem #b5b7b747;
    border-bottom: solid 0.01rem #b5b7b747;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  button {
    align-self: center;
    background-color: #fade4b;
    border: none;
    border-radius: 1.4rem;
    padding: 0.9rem 3.1rem;
    color: black;
    font-weight: bold;
  }

  button:hover {
    background-color: #dec442;
  }

  p {
    font-size: 0.8rem;
    margin: 0.3rem;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  width: 20%;
  border: solid 0.1rem #b5b7b747;
  border-radius: 1rem;
  padding: 0.1rem 1rem;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 3;

  h2 {
    font-size: 1.2rem;
    margin: 0.8rem;
  }

  img {
    max-height: 7rem;
    max-width: 12rem;
    border-radius: 1rem;
    margin: 0.3rem;
  }
`;
