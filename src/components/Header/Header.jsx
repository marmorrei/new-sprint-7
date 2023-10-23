import { HeaderStyle } from './Styled-components';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import Login from '../Login/Login';
import { useLoginModalContext } from '../../context/ModalsProvider';
import { useUserLoginContext } from '../../context/UserProvider';

export default function Header() {
  const [displayLogin, setDisplayLogin] = useLoginModalContext();
  const [username, setUsername, resetUserData] = useUserLoginContext();

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
        <ul className='search-login'>
          <li>
            <img
              src='/src/assets/images/search-left-1506-svgrepo-com.svg'
              alt='search'
              className='small-logo'
            />
            <span>SEARCH</span>
          </li>
          <li
            onClick={() => {
              setDisplayLogin(!displayLogin);
              resetUserData();
            }}
            className='login'
          >
            <img
              src='/src/assets/images/person-male-svgrepo-com.svg'
              alt='login'
              className='small-logo'
            />
            <span>{username || 'SIGN IN'}</span>
          </li>
          {username !== undefined && (
            <li className='logout'>
              <span
                onClick={() => {
                  setUsername(undefined);
                  resetUserData();
                }}
              >
                LOGOUT
              </span>
            </li>
          )}
        </ul>
      </div>
      {displayLogin && <Login />}
    </HeaderStyle>
  );
}
