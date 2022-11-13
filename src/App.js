import "./App.scss";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { DonateModal, Footer, Navbar } from "./components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import { ErrorBoundary } from "react-error-boundary";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import ReactGA from "react-ga";
const TRACKING_ID = "341435190";
ReactGA.initialize(TRACKING_ID);
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
  useEffect(() => {
    // console.log(location.pathname + location.search);
    ReactGA.set({ page: location.pathname });

    ReactGA.pageview(location.pathname);
  }, [location]);

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
          {/* <Route path="events" element={<Events />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {location.pathname !== "/contact" && <Footer />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
