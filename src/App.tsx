import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
};

export default App;
