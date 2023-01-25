import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Offer from "./components/Offer";
import banner from "./data/data.json";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos.js"
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
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={banner.hotAccessories.music}
              musicCover={banner.hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={banner.hotAccessories.smartDevice}
              smartDeviceCover={banner.hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={banner.hotAccessories.home}
              homeCover={banner.hotAccessoriesCover.home}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={banner.hotAccessories.lifeStyle}
              lifestyleCover={banner.hotAccessoriesCover.lifeStyle}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={banner.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                banner.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productreviews={banner.productReviews} />
      <Heading text="Videos" />
      <Videos videos={banner.videos}/>
    </Router>
  );
}

export default App;
