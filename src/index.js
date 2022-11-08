import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
// import ReactGA from 'react-ga';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import { hydrate, render } from "react-dom";

// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     rootElement
//   );
// } else {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     rootElement
//   );
// }
