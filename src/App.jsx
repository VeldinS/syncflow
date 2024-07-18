import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

function App() {

  return (
    <div className={'w-screen h-auto font-redHat flex flex-col items-start justify-start'}>
        <Navbar />
        <Landing />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
