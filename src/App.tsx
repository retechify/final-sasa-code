import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import CampusLife from './pages/CampusLife';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import CoreTeam from './pages/CoreTeam';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/core-team" element={<CoreTeam />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
