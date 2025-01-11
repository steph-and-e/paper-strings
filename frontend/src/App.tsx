import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <About />
      <Technology />
    </div>
  );
}

export default App;
