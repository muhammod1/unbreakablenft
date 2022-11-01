import "./App.scss";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DonateModal, Footer, Navbar } from "./components";

import {
  About,
  Community,
  Home,
  Nfts,
  Partnership,
  Program,
  Roadmap,
  Donation,
} from "./pages";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import Events from "./pages/Events";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
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
            <Route path="events" element={<Events />} />
            <Route path="donation" element={<Donation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
