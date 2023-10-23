import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const signUpModalContext = React.createContext();

export const useSignUpModalContext = () => useContext(signUpModalContext);

export const ModalsProvider = ({ children }) => {
  const [displaySignUp, setDisplaySignUp] = useState(false);

  return (
    <signUpModalContext.Provider value={[displaySignUp, setDisplaySignUp]}>
      {children}
    </signUpModalContext.Provider>
  );
};

ModalsProvider.propTypes = {
  children: PropTypes.any,
};
