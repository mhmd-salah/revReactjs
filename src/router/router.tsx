import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayout from "../pages/Layout";
import QuicStart from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* Root layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="content" element={<Contact />} />
        <Route path="products" element={<h1>products page</h1>} />
      </Route>
      {/* learn layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuicStart />} />
      </Route>
    </>
  )
);
export default router;
