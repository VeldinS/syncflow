import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Process from "./components/Process.jsx";

function App() {

  return (
    <div className={'w-screen h-auto flex flex-col items-start justify-start'}>
        <Navbar />
        <Landing />
        <Services />
        <Process />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
