import styled from 'styled-components';

export const HeaderStyle = styled.header`
  .header-items {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  li {
    margin: 0.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  ul.login li img {
    margin-right: 0.5rem;
    max-height: 1rem;
  }

  ul.login li span {
    font-size: 0.9rem;
    font-weight: 700;
  }

  .logo {
    margin: 1rem 9rem 0rem 7rem;
  }

  .logo img {
    max-height: 5.2rem;
  }
`;
