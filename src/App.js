import "./App.css";

import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:id" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
