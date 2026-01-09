import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600">Ryze AI</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/pricing" className="hover:text-indigo-600">Pricing</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile Menu */}
<div
  className={`
    fixed inset-0 z-40 md:hidden
    transition-all duration-300
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
>
  {/* Backdrop */}
  <div
    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
    onClick={() => setOpen(false)}
  ></div>

  {/* Menu Panel */}
  <div
    className={`
      absolute top-0 right-0 h-full w-64
      bg-white shadow-xl p-6
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
  >
    <nav className="flex flex-col space-y-6 mt-12 text-lg font-medium">
      <Link
        to="/"
        onClick={() => setOpen(false)}
        className="text-gray-700 active:text-indigo-600"
      >
        Home
      </Link>

      <Link
        to="/about"
        onClick={() => setOpen(false)}
        className="text-gray-700 active:text-indigo-600"
      >
        About
      </Link>

      <Link
        to="/pricing"
        onClick={() => setOpen(false)}
        className="text-gray-700 active:text-indigo-600"
      >
        Pricing
      </Link>
    </nav>
  </div>
</div>

    </nav>
  );
}