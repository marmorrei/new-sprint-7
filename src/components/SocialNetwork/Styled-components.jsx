import styled from 'styled-components';

export const SocialNetworkStyle = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin: 0.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #kids-logo::before {
    content: ' | ';
    font-size: 1.7rem;
    font-weight: lighter;
    position: relative;
    left: -0.4rem;
  }

  .small-logo {
    max-height: 1.5rem;
  }
`;
