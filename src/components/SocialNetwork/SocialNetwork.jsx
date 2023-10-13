import { SocialNetworkStyle } from './Styled-components';

export default function SocialNetwork() {
  return (
    <SocialNetworkStyle className='social-networks'>
      <li>
        <img
          src='/src/assets/images/tiktok-svgrepo-com.svg'
          alt='tiktok'
          className='small-logo'
        />
      </li>
      <li>
        <img
          src='/src/assets/images/instagram-svgrepo-com.svg'
          alt='instagram'
          className='small-logo'
        />
      </li>
      <li>
        <img
          src='/src/assets/images/twitter-154-svgrepo-com.svg'
          alt='twitter'
          className='small-logo'
        />
      </li>
      <li>
        <img
          src='/src/assets/images/facebook-svgrepo-com.svg'
          alt='facebook'
          className='small-logo'
        />
      </li>
      <li>
        <img
          src='/src/assets/images/youtube-168-svgrepo-com.svg'
          alt='youtube'
          className='small-logo'
        />
      </li>
      <li id='kids-logo'>
        <img
          src='https://lumiere-a.akamaihd.net/v1/images/sw_nav_kids_937ed58b.svg?region=0%2C0%2C40%2C15'
          alt='sw-kids'
          className='small-logo'
        />
      </li>
    </SocialNetworkStyle>
  );
}
