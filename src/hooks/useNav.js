import {useRef, useEffect} from 'react';
import {useGlobalContext} from '../context/AppContext';
import useOnScreen from './useOnScreen';

const useNav = (navLinkId) => {
  const ref = useRef(null);

  const {setActiveNavLinkId} = useGlobalContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveNavLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveNavLinkId, navLinkId]);

  return ref;
};

export default useNav;
