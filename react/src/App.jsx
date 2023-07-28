import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        {/* <Route path="/results" element={<ResultLayout />} /> */}
      </Routes>
    </Router>
  );
}
