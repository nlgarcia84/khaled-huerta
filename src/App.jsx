import { About } from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Faqs } from './pages/Faqs';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Studies } from './pages/Studies';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/myStudies" element={<Studies />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
