import "./App.scss";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DonateModal, Footer, Navbar } from "./components";
import { useLocation } from "react-router-dom";
import {
  About,
  Community,
  Contact,
  Home,
  Nfts,
  Partnership,
  Program,
  Roadmap,
} from "./pages";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import Events from "./pages/Events";
import Donate from "./pages/Donate";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const App = () => {
  let location = useLocation();

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DonateModal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="program" element={<Program />} />
          <Route path="nfts" element={<Nfts />} />
          <Route path="partnership" element={<Partnership />} />
          <Route path="community" element={<Community />} />
          <Route path="donate" element={<Donate />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {location.pathname !== "/contact" && <Footer />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
