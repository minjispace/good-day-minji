import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  const handleClick = (scrollToId, navLinkId) => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AppContext.Provider
      value={{
        handleScrollTop,
        handleClick,

        activeNavLinkId,
        setActiveNavLinkId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
