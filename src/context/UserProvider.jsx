import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const userDataContext = React.createContext();
const userLoginContext = React.createContext();

export const useUserDataContext = () => useContext(userDataContext);
export const useUserLoginContext = () => useContext(userLoginContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [username, setUsername] = useState();

  useEffect(() => {
    userData.username !== undefined
      ? setUsername(userData.username.toUpperCase())
      : setUsername(prevUsername => prevUsername);
  }, [userData]);

  const resetUserData = () => {
    setUserData({
      email: '',
      password: '',
    });
  };

  return (
    <userDataContext.Provider value={[userData, setUserData, resetUserData]}>
      <userLoginContext.Provider value={[username, setUsername, resetUserData]}>
        {children}
      </userLoginContext.Provider>
    </userDataContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any,
};
