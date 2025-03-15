import React from 'react';
import Logo from '../assets/Logo.png'; // Import the logo

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-[400px] mx-4">
        {/* Logo */}
        <div className="mb-6 text-center">
          <img src={Logo} alt="App Logo" className="mx-auto h-40" />
        </div>

        {/* Sign-Up Card */}
        <div className="bg-white p-8 rounded-lg shadow-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-600">Create a new account</p>
          </div>

          {/* Sign-Up Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block mb-1 text-sm">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter your username"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block mb-1 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Re-Type Password Field */}
            <div>
              <label htmlFor="retype-password" className="block mb-1 text-sm">
                Re-Type Password
              </label>
              <input
                type="password"
                id="retype-password"
                className="w-full p-2 border rounded-md text-sm"
                placeholder="Re-enter your password"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#79A657] text-white p-2 rounded-md text-sm"
            >
              Register
            </button>
          </form>

          {/* Login Prompt */}
          <div className="mt-4 text-center text-sm">
            Have an account?{" "}
            <a href="/login" className="text-[#79A657] hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;