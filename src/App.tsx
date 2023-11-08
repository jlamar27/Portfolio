import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileNavbar from "./components/MobileNavbar";
import { MenuContextTheFunctionProvider } from "./context/openNabar";


function App() {
  <script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.3/dist/mailtoui-min.js"></script>
 

  return (
    
    <div className="m-0 w-full bg-neutral-50 p-0">
      <MenuContextTheFunctionProvider>
        <Navbar />
        <MobileNavbar />
      </MenuContextTheFunctionProvider>

      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
