import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const loginModalContext = React.createContext();
const signUpModalContext = React.createContext();

export const useLoginModalContext = () => useContext(loginModalContext);
export const useSignUpModalContext = () => useContext(signUpModalContext);

export const ModalsProvider = ({ children }) => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  return (
    <loginModalContext.Provider value={[displayLogin, setDisplayLogin]}>
      <signUpModalContext.Provider value={[displaySignUp, setDisplaySignUp]}>
        {children}
      </signUpModalContext.Provider>
    </loginModalContext.Provider>
  );
};

ModalsProvider.propTypes = {
  children: PropTypes.any,
};
