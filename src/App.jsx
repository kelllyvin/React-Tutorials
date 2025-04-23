import "./App.css"
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import Header from "./Components/Header";
import Footer from  "./Components/Footer"
import Errorpage from "./Components/Errorpage";
import Login from "./Pages/Login";
import Timeline from "./Pages/Timeline";
import Singletweet from "./Pages/Singletweet";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Navigate to="/" />} />
          <Route path="/About" element={<About />} />
          <Route path="/about us" element={<Navigate to="/about" />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<Singletweet />} />

          <Route path="*" element={<Errorpage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
