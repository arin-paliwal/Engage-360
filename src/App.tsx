import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesConfig } from "./routes/routes-config";
import PrivateRoute from "./routes/protected-routes";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {routesConfig.map(({ path, Component, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={
                isPrivate ? (
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  <Component />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
