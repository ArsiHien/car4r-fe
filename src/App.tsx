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
          const Layout = route.layout || DefaultLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
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
