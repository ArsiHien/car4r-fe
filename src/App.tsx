/*
 * File này thiết lập routing
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts";
import StaffLayout from "./layouts/StaffLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;

          /*chia Default Staff Admin layout cho từng account ??  */
          const Layout = route.layout || DefaultLayout;
          // const Layout = route.layout || StaffLayout;
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
