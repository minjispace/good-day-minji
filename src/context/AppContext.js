import React, {useContext, useState} from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [active, setActive] = useState('#hero');

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('url');
    setActive(target);
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location,
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
        active,
        setActive,
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
