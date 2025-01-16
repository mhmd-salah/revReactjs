import { createRoot } from "react-dom/client";
// import AppRouter from "./Router/AppRouter";
// import AppRouter from "./Router";
import App from "./App";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App/>);
} else {
  throw new Error("root element not failed");
}
