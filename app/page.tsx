import Header from './components/Header';
import MainSection from './components/MainSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import {Contact} from './components/Contact';
import Footer from './components/Footer';
export default function Home() {
  return (
    <> 
      <Header />
      <MainSection />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}   