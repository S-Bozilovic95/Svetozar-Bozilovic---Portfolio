import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import LightboxProvider from "./context/LightboxProvider";
import { useTheme } from "./hooks/useTheme";
import Contact from "./sections/Contact/Contact";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";

const App = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <LightboxProvider>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <main id="top">
        <Hero />
        <Experience />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </LightboxProvider>
  );
};

export default App;
