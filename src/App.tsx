import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routesConfig } from "./routes/routes-config";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          {routesConfig.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
