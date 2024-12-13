import {Contact} from "../components/Contact";
import Header from "../components/Header";
import About from "./About";
import MainSection from "./MainSection";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  return(
    <><Header/>
    <MainSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}