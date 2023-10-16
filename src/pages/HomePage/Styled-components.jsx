import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
  width: 98vw;

  section {
    background-image: url('https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 4rem 4rem 8rem 35rem;
  }

  h1 {
    color: white;
    font-size: 2.5rem;
    text-align: end;
    margin: 3rem 0 1rem 8rem;
  }

  h3 {
    font-size: 1.2rem;
    text-align: end;
    line-height: 1.8;
    margin: 1rem 0 1rem 10rem;
  }

  button {
    background-color: #fade4b;
    border: none;
    border-radius: 1.4rem;
    padding: 0.9rem 3.1rem;
    color: black;
    font-weight: bold;
  }

  button:hover {
    background-color: #dec442;
    pointer-events: visible;
  }
`;
