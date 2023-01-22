import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import Offer from "./components/Offer";
import banner from "./data/data.json";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.banner.start} />
      <Offer offer={banner.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={banner.starProduct} />
      <Heading text="HOT ACCESSORIES" />
    </Router>
  );
}

export default App;
