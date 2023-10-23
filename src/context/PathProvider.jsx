import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const currentPathContext = React.createContext();

export const useCurrentPathContext = () => useContext(currentPathContext);

export const PathProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('/');

  const changePath = path => setCurrentPath(path);

  return (
    <currentPathContext.Provider value={[currentPath, changePath]}>
      {children}
    </currentPathContext.Provider>
  );
};

PathProvider.propTypes = {
  children: PropTypes.any,
};
