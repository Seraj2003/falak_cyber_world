import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    alert("Login submitted (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-neutral-900 shadow-lg p-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-1 w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent px-3 py-2 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="accent-black dark:accent-white" />
              Remember me
            </label>
            <a href="#" className="text-black dark:text-white hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-2 text-white font-medium hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="#" className="text-black dark:text-white font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
