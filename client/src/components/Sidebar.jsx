export default function Sidebar() {
  return (
    <div className="w-64 bg-indigo-600 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">PlaceMate AI</h2>

      <button className="bg-white text-indigo-600 py-2 rounded-lg font-semibold mb-4">
        + New Chat
      </button>

      <div className="flex-1 space-y-2">
        <div className="bg-indigo-500 p-2 rounded">Resume Review</div>
        <div className="bg-indigo-500 p-2 rounded">DSA Help</div>
        <div className="bg-indigo-500 p-2 rounded">Interview Q&A</div>
      </div>

      <div className="mt-6 text-sm opacity-80">
        Logged in as Love 💙
      </div>
    </div>
  );
}