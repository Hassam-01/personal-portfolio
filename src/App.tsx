import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import bg from "./assets/background.svg";

function App() {
  return (
    <div className="relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Ensure it spans the entire height initially
        }}
      ></div>
      
      {/* Sections */}
      <Navbar />

      <LandingPage />
      <section className="h-screen flex items-center justify-center text-white">
        <h1>Another Section</h1>
      </section>
      <section className="h-screen flex items-center justify-center text-white">
        <h1>More Content Here</h1>
      </section>
    </div>
  );
}

export default App;
