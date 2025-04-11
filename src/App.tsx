import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import ProjectPath from "./pages/projects";
import bg from "./assets/background.svg";
import Education from "./pages/education";
import TechStack from "./pages/techstack";
import Contact from "./pages/contact";
import Experience from "./pages/experience";

// import Three from "./components/three";
function App() {
  return( 
  <div>
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}></div>

    <Navbar />
    <section id="Home"> 
    <LandingPage/>
    </section>
    <section id="Project">
    <ProjectPath/>
    </section>
    <section id="Experience">
      <Experience/>
    </section>
    <section id="Tech Stack"> 
      <TechStack/>
    </section>
    <section id="Education">
      <Education/>
    </section>
    <section id="Contact"> 
      <Contact/>
    </section>
  </div>);
}

export default App;
