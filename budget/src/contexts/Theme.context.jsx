import {
  useCallback,
  // useEffect,
  useMemo,
  useState,
} from 'react';
import {
  ThemeContext,
} from '.';

const ThemeProvider = ({ children }) => {
  // const [darkmode, setDarkmode] = useState(Boolean(localStorage.getItem('darkmode')));
  const [darkmode, setDarkmode] = useState(() =>
    localStorage.getItem('darkmode') === 'true',
  );
  // useEffect(()=> {
  //   if (darkmode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  //   localStorage.setItem('darkmode', darkmode);
  // }, [darkmode]);

  // const toggleDarkmode = useCallback(() => setDarkmode((prev) => ! prev),[]);
  const toggleDarkmode = useCallback(() => {
    setDarkmode((prev) => {
      const next = !prev;
      localStorage.setItem('darkmode', next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    darkmode,
    toggleDarkmode,
  }), [darkmode, toggleDarkmode]);

  return (
    <ThemeContext.Provider value={value}>
      <div id="themewrapper" className={darkmode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
