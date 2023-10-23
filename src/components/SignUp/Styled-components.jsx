import styled from 'styled-components';

export const Overlay = styled.div`
  background-image: url(https://cdn.registerdisney.go.com/v4/asset/bundler/STARWARS/v4/images/v1/starwars-background-web.webp);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;
export const ModalContainer = styled.dialog`
  background: transparent;
  width: 100vw;
  height: 100vh;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 98vw;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    background-color: #e9ebf0;
    border-radius: 1.3rem;
    padding: 0.4rem 0.5rem;
    margin: 0.6rem 1rem 0 0;
    img {
      max-height: 1.2rem;
    }
  }

  button:hover {
    background-color: #c7c9cf;
  }
`;
export const ModalHeader = styled.header`
  padding: 0.8rem 0 1.5rem 0;
  img {
    max-height: 5.2rem;
  }
`;

export const ModalBody = styled.div`
  background-color: white;
  width: 33vw;
  border-radius: 1.8rem;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: black;
    margin: 0;
    font-size: 1.6rem;
  }

  p {
    color: black;
    font-size: 1rem;
    line-height: 1.6rem;
    strong {
      color: black;
    }
    small {
      color: black;
    }
  }

  .signup-form {
    display: flex;
    flex-direction: column;
  }

  input {
    background-color: #e9ebf0;
    border: none;
    border-radius: 0.5rem;
    margin: 0.3rem 0;
    padding: 1rem;
    color: black;
  }

  .fake-checkbox {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    img {
      max-height: 1.5rem;
    }
    p {
      margin: 0 0 0 0.6rem;
    }
  }

  .signup-button {
    background-color: #fade4b;
    border: none;
    border-radius: 1.4rem;
    padding: 0.9rem 3.1rem;
    margin-top: 0.6rem;
    color: black;
    font-weight: bold;
  }

  .modal-footer {
    h3 {
      color: #5f6166;
      border-top: 1px solid #e9ebf0;
      padding-top: 1rem;
      font-size: 0.9rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.25rem;
      color: #5f6166;
    }

    img {
      width: 95%;
      margin-top: 0.5rem;
    }
  }
`;
