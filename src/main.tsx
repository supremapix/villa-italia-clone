import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

const WrappedApp = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, WrappedApp);
} else {
  createRoot(rootElement).render(WrappedApp);
}
