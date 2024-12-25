import { createRoot } from "react-dom/client";
import AppRouter from "./Router/AppRouter";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<AppRouter/>);
} else {
  throw new Error("root element not failed");
}
