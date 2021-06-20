import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
    </>
  );
};

export default App;
