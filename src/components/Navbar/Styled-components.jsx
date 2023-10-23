import styled from 'styled-components';

export const NavbarStyle = styled.nav`
  border-bottom: solid 0.01rem #b5b7b747;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    margin: 1rem 2rem 0 2rem;
  }

  a {
    text-decoration: none;
    color: #b5b7b7;
    font-size: 0.9rem;
    font-weight: 700;
  }

  a:hover {
    color: white;
  }

  a.is-active {
    color: white;
  }
`;
