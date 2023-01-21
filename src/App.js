import About from "./sections/about/About";
import Classes from "./sections/classes/Classes";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Home from "./sections/home/Home";
import Navbar from "./sections/navbar/Navbar";
import Schedules from "./sections/schedules/Schedules";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Classes />
      <Schedules />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
