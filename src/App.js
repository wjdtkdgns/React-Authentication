import "./App.css";

import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import CheckAuth from "./components/util/CheckAuth";
import { Route, Routes } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <CheckAuth>
              <Profile />
            </CheckAuth>
          }
        />
        <Route
          path="/profile/changepassword"
          element={
            <CheckAuth>
              <ChangePassword />
            </CheckAuth>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
