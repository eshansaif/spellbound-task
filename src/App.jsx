import "./App.css";
import EngineeringTracks from "./components/EngineeringTracks/EngineeringTracks";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PremiumLearning from "./components/PremiumLearning/PremiumLearning";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <div>
      <Header />

      <Tracks />
      <PremiumLearning />
      <Testimonials />
      <EngineeringTracks />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
