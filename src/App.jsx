import Landing from "./components/Landing/Landing.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Services from "./components/Services/Services.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Process from "./components/Process/Process.jsx";
import About from "./components/About/About.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";

function App() {

  return (
    <div className={'w-screen h-auto flex flex-col items-start justify-start'}>
        <Navbar />
        <Landing />
        <About />
        <Services />
        <Process />
        <Contact />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App
