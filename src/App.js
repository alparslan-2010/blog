import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>}
          />

          <Route path="/about" element={<About/>}
          />

          <Route path="/contact" element={<Contact/>}
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
