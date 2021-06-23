import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Projects /> */}
    </>
  );
};

export default App;
