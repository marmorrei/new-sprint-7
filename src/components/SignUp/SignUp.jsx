import { useUserDataContext } from '../../context/UserProvider';
import {
  useLoginModalContext,
  useSignUpModalContext,
} from '../../context/ModalsProvider';
import {
  ButtonsContainer,
  ModalBody,
  ModalContainer,
  ModalHeader,
  Overlay,
} from './Styled-components';

export default function SignUp() {
  // Context
  const [userData, setUserData, resetUserData] = useUserDataContext();
  const [displayLogin, setDisplayLogin] = useLoginModalContext();
  const [displaySignUp, setDisplaySignUp] = useSignUpModalContext();

  // Sign Up user
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then(res => res.json());

    setDisplaySignUp(!displaySignUp);
    setDisplayLogin(!displayLogin);
  };

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Overlay>
      <ModalContainer className='modal'>
        <ButtonsContainer className='nav-buttons'>
          <button
            className='back-button'
            onClick={() => setDisplaySignUp(!displaySignUp)}
          >
            <img
              src='/src/assets/images/left-arrow-svgrepo-com.svg'
              alt='back-button'
            />
          </button>
          <button
            className='close-button'
            onClick={() => {
              setDisplaySignUp(!displaySignUp);
              setDisplayLogin(!displayLogin);
              resetUserData();
            }}
          >
            <img
              src='/src/assets/images/close-svgrepo-com.svg'
              alt='close-button'
            />
          </button>
        </ButtonsContainer>
        <ModalHeader className='modal-header'>
          <img
            src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'
            alt='sw-logo'
          />
        </ModalHeader>
        <ModalBody>
          <h1>Create your account</h1>
          <p>
            Star Wars is part of The Walt Disney Family of Companies. You will
            be able to log into services and experiences using the same email
            and password.
          </p>
          <p>
            Enter a username to create your account with{' '}
            <strong>{userData.email}</strong>
          </p>
          <form className='signup-form' onSubmit={e => handleSubmit(e)}>
            <input
              type='text'
              placeholder='Username'
              value={userData.username}
              name='username'
              onChange={e => handleChange(e)}
            ></input>
            <input
              type='password'
              placeholder='Password'
              value={userData.password}
              name='password'
              onChange={e => handleChange(e)}
            ></input>
            <div className='fake-checkbox'>
              <img
                src='/src/assets/images/fake-checkbox-unchecked-svgrepo-com.svg'
                alt='fake-checkbox'
              />
              <p>
                Yes! I would like to receive by email special offers and updates
                about Lucasfilm Ltd. and other products and services from The
                Walt Disney Family of Companies.
              </p>
            </div>
            <p>
              By creating an account, you agree to our Terms of Use, and
              acknowledge that you have read our Privacy Policy, Cookies Policy
              and UK & EU Privacy Rights. More...
            </p>
            <p>
              <small>My home country/region: Spain.</small>
            </p>
            <button className='signup-button' type='submit'>
              Create Account
            </button>
          </form>
        </ModalBody>
      </ModalContainer>
    </Overlay>
  );
}
