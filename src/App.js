import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";

import { About, Home, Nfts, Partnership, Program, Roadmap } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="program" element={<Program />} />
          <Route path="nfts" element={<Nfts />} />
          <Route path="partnership" element={<Partnership />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
