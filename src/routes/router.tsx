import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../RootLayout";
import LearnLayout from "../learn/LearnLayout";
import QuickStart from "../Pages/QuickStart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>home page</h1>} />
        <Route path="learn" element={<h1>element page</h1>} />
        <Route path="content" element={<h1>Content page</h1>} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="hook" element={<h1>Hooks page</h1>} />
      </Route>
      {/* learn layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route path="/learn" element={<QuickStart/>} />
        <Route
          path="thinking-in-react"
          element={<h1>thinking in react page</h1>}
        />
        <Route path="instlations" element={<h1>instlation</h1>} />
      </Route>
    </>
  )
);
export default router;
