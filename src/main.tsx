<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import AppRouter from "./Router/AppRouter";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<AppRouter/>);
} else {
  throw new Error("root element not failed");
}
=======
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
      <App />
  </>
);
>>>>>>> 3a21463e161498f26755944450f8b85572bc3cae
