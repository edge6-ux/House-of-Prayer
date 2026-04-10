import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Service from "./pages/Service";
import VisitUs from "./pages/VisitUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <VisionMission />
        <Service />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
