import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from '../assets/Logo.png'; 

const Login = () => {
  const navigate = useNavigate(); 

  const validUsername = "studyo";
  const validPassword = "Q5hHxC_a";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      alert("Welcome, user " + username);
      navigate('/techniques');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-[280px]">
        {/* Logo */}
        <div className="mb-6 text-center">
          <img src={Logo} alt="App Logo" className="mx-auto h-18" />
        </div>

        {/* Login Card */}
        <div className="bg-white px-6 py-4 rounded-lg shadow-2xl">
          <div className="mb-6 text-center">
            <h1 className="text-xl font-bold mb-1">Login</h1>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          {error && <p className="text-red-500 text-center text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="username" className="block text-sm mb-1">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#79A657] text-white py-2 rounded-md text-sm"
            >
              Login
            </button>

            <div className="text-center text-sm">
              <a href="#" className="text-[#79A657] hover:underline">Forgot Password?</a>
            </div>
          </form>

          <div className="mt-4 text-center text-sm">
            Don't have an account? {" "}
            <a href="/signup" className="text-[#79A657] hover:underline">
              Register
            </a>
          </div>
        </div>
      </div>

      {/* GDPR Policy */}
      <div className="mt-4 text-center text-xs text-gray-600">
        <a 
          href="/public/GDPR.html"
          className="text-[#79A657] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our GDPR privacy policy
        </a>
      </div>
    </div>
  );
};

export default Login;
