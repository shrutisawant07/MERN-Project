import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppHome from "./pages/AppHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
       <Route path="/dashboard" element={<AppHome />} />
      </Routes>
    </BrowserRouter>
  );
}