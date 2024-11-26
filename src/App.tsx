/*
 * File này thiết lập routing
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;
          const Sidebar = route.sidebar ? <route.sidebar /> : null; // Render sidebar if provided
          const Layout = route.layout || DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout sidebar={Sidebar}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default App;
