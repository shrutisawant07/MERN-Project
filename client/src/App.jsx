import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppHome from "./pages/AppHome";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AppHome />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}