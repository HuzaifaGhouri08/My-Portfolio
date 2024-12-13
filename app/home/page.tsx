
import About from "../components/About";
import { Contact } from "../components/Contact";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function HomePage() {
  return(
    <><Header />
    <MainSection/>
    <About/>
    <Skills />
    <Projects/>
    <Contact/>
    </>
  );
}
