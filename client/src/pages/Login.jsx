import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();       // stop page refresh
    navigate("/dashboard");  // go to AppHome
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          PlaceMate AI
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to continue
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />

          {/* THIS BUTTON TRIGGERS onSubmit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}