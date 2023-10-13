import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.dialog`
  background-color: #b5b7b779;
  width: 65%;
  min-height: 5rem;
  border: solid 0.2rem #b5b7b747;
  border-radius: 0.5rem;
  padding: 0.5rem 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 1.5rem;
  }

  img {
    max-width: 20rem;
    border-radius: 1rem;
  }

  ul.list-of-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  li {
    margin: 0.3rem;
    padding: 0.1rem;
    font-size: 0.9rem;
  }
`;
