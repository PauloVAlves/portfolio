import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/nav/Navbar';
import Splash from './components/sections/Splash';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

library.add(fab, faGithub);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Splash />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
