import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";

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
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />{" "}
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/add-hotel"
          element={
            <Layout>
              <p>add hotel</p>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
