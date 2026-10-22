import { BrowserRouter } from "react-router-dom";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

const WrappedApp = (
  <HelmetProvider>
    <BrowserRouter><App /></BrowserRouter>
  </HelmetProvider>
);

if (rootElement.children.length > 0) {
  hydrateRoot(rootElement, WrappedApp);
} else {
  createRoot(rootElement).render(WrappedApp);
}
