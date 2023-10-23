import {
  useUserDataContext,
  useUserLoginContext,
} from '../../context/UserProvider';
import { useSignUpModalContext } from '../../context/ModalsProvider';
import { fetchUsers } from '../../utils/api/fetchUsers';
import SignUp from '../SignUp/SignUp';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
} from './Styled-components';
import { useNavigate } from 'react-router-dom';
import { useCurrentPathContext } from '../../context/PathProvider';

export default function Login() {
  // Context
  const [userData, setUserData, resetUserData] = useUserDataContext();
  const [displaySignUp, setDisplaySignUp] = useSignUpModalContext();
  const [currentPath] = useCurrentPathContext();
  const [username] = useUserLoginContext();
  const navigate = useNavigate();

  // Login user
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const users = await fetchUsers();
      const userFound = users.find(user => user.email === userData.email);
      userFound !== undefined
        ? fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
          })
            .then(res => res.json())
            .then(data => {
              if (data === 'Incorrect password') {
                alert('Incorrect password');
              } else {
                setUserData({ ...userData, username: data.user.username });
                navigate(currentPath);
              }
            })
        : setDisplaySignUp(!displaySignUp);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Overlay>
      <ModalContainer className='modal'>
        <button
          className='close-button'
          onClick={() => {
            resetUserData();
            username !== undefined ? navigate(currentPath) : navigate('/');
          }}
        >
          <img
            src='/src/assets/images/close-svgrepo-com.svg'
            alt='close-button'
          />
        </button>
        <ModalHeader className='modal-header'>
          <img
            src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'
            alt='sw-logo'
          />
        </ModalHeader>
        <ModalBody className='modal-body'>
          <h1>Enter your details</h1>
          <p>
            Log into your Star Wars account. If you do not have one, you will be
            prompted to create one.
          </p>
          <form className='login-form' onSubmit={e => handleSubmit(e)}>
            <input
              type='email'
              placeholder='Email'
              value={userData.email}
              name='email'
              onChange={e => handleChange(e)}
            ></input>
            <input
              type='password'
              placeholder='Password'
              value={userData.password}
              name='password'
              onChange={e => handleChange(e)}
            ></input>
            <button className='login-button' type='submit'>
              Login
            </button>
          </form>
          <footer className='modal-footer'>
            <h3>Star Wars is part of The Walt Disney Family of Companies.</h3>
            <p>
              This email and password lets you seamlessly log into services and
              experiences across The Walt Disney Family of Companies, such as
              ESPN, Walt Disney World, Marvel, and more.
            </p>
            <p>
              If you have used your email with one of our services, please use
              it here too.
            </p>
            <img src='/src/assets/images/logo-parade.png' alt='logo-parade' />
          </footer>
        </ModalBody>
      </ModalContainer>
      {displaySignUp && <SignUp />}
    </Overlay>
  );
}
