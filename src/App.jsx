import { About } from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default App;
