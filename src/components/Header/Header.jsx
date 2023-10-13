import { HeaderStyle } from './Styled-components';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

export default function Header() {
  return (
    <HeaderStyle className='header'>
      <div className='header-items'>
        <SocialNetwork />
        <div className='logo'>
          <img
            src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'
            alt='sw-logo'
          />
        </div>
        <ul className='login'>
          <li>
            <img
              src='/src/assets/images/search-left-1506-svgrepo-com.svg'
              alt='search'
              className='small-logo'
            />
            <span>SEARCH</span>
          </li>
          <li>
            <img
              src='/src/assets/images/person-male-svgrepo-com.svg'
              alt='login'
              className='small-logo'
            />
            <span>SIGN IN</span>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
}
