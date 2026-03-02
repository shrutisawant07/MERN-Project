import Sidebar from "../components/Sidebar";

export default function AppHome() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to PlaceMate AI 👋
        </h1>

        <p className="text-gray-600 mt-2">
          How can I help you with your placement today?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            📄 Resume Review
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            💬 Interview Questions
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
            📚 DSA Help
          </div>
        </div>
      </div>
    </div>
  );
}