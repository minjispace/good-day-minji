import React, {useContext} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppContext.Provider value={{handleScrollTop}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
