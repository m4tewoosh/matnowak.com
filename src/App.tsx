import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
