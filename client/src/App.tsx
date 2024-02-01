import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>home</p>
            </Layout>
          }
        />{" "}
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
