import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  useAnimate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import Navigation from './components/Navigation';
import Content from './components/Content';
import ContextProvider from './components/ContextLanguageProvider';

const App = () => {
  const [scope, animate] = useAnimate();

  const colors = ['#13ffaa', '#1e67c6', '#ce84cf', '#dd335c'];
  const color = useMotionValue(colors[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, colors, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  return (
    <motion.div style={{ backgroundImage }}>
      <Router basename={process.env.PUBLIC_URL}>
        <ContextProvider>
          <Content />
          <Navigation />
        </ContextProvider>
      </Router>
    </motion.div>
  );
};

export default App;
