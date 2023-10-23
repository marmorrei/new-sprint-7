import { FooterStyle } from './Styled-components';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

export default function Footer() {
  return (
    <FooterStyle>
      <p>More From Star Wars:</p>
      <SocialNetwork />
      <small>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Images were freely collected from Wookiepedia and
        www.starwars-visualguide.com
      </small>
    </FooterStyle>
  );
}
