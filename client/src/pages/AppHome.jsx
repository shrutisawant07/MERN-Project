import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AppHome() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome 👋</h1>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <div
            onClick={() => navigate("/chat")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            💬 Start Chat
          </div>
        </div>
      </div>
    </div>
  );
}