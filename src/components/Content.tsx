import { Routes, Route } from 'react-router-dom';
import Start from '../layouts/Start';
import Portfolio from '../layouts/Portfolio';
import Contact from '../layouts/Contact';

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Content;
