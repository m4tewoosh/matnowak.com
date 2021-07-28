import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
