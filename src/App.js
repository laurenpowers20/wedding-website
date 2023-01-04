import "./App.css";
import Faq from "./Screens/Faq";
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
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/travelandstay" element={<Travel />} />
        <Route path="/ourstory" element={<Story />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </>
  );
}

export default App;
