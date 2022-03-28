import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar";
import About from "./pages/About";
import AboutApp from "./pages/AboutApp";
import AboutAuthor from "./pages/AboutAuthor";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-app" element={<AboutApp />} />
        <Route path="/about-author" element={<AboutAuthor />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      {/* <Navbar />
      <Home /> */}
    </div>
  );
};

export default App;
