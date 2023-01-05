import "./App.css";
import AboutSite from "./Screens/AboutSite";
import Faq from "./Screens/Faq";
import Hamburger from "./Components/Hamburger";
import Home from "./Screens/Home";
import Location from "./Screens/Location";
import Nav from "./Components/Nav";
import Photos from "./Screens/Photos";
import Registry from "./Screens/Registry";
import Story from "./Screens/Story";
import Travel from "./Screens/Travel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="nav-bar-div">
        <Nav />
      </div>
      <div className="hamburger-menu-div">
        <Hamburger />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/travelandstay" element={<Travel />} />
        <Route path="/ourstory" element={<Story />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/aboutthispage" element={<AboutSite />} />
      </Routes>
    </>
  );
}

export default App;
