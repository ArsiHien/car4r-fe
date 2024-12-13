import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts";
import useRefreshToken from "./utils/RefreshToken";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const location = useLocation();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = useRefreshToken();

  useEffect(() => {
    const duration = 300;
    const startPosition = window.scrollY;
    const distance = -startPosition;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const position = startPosition + distance * progress;
      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }, [location.pathname]);

  // Kiem tra refresh token
  useEffect(() => {
    const checkAndRefreshToken = async () => {
      console.log("refreshToken");
      if (!accessToken) {
        console.log("null access token");
        await refreshToken();
      }
    };

    checkAndRefreshToken();

    return () => {};
  }, [accessToken]);

  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.page;
        const Sidebar = route.sidebar ? <route.sidebar /> : null;
        const Layout = route.layout || DefaultLayout;
        const element = (
          <Layout sidebar={Sidebar}>
            <Page />
          </Layout>
        );

        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.allowedRoles ? (
                <PrivateRoute allowedRoles={route.allowedRoles}>
                  {element}
                </PrivateRoute>
              ) : (
                element
              )
            }
          />
        );
      })}
    </Routes>
  );
};

const WrappedApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default WrappedApp;
