import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">CareerAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/jobs" className="text-gray-700 hover:text-primary px-3 py-2">
              Find Jobs
            </Link>
            <Link to="/resume-builder" className="text-gray-700 hover:text-primary px-3 py-2">
              Resume Builder
            </Link>
            <Link to="/linkedin-optimizer" className="text-gray-700 hover:text-primary px-3 py-2">
              LinkedIn Optimizer
            </Link>
            <Link to="/sign-in">
              <Button variant="outline" className="ml-4">
                Sign In
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/jobs"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Find Jobs
            </Link>
            <Link
              to="/resume-builder"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Resume Builder
            </Link>
            <Link
              to="/linkedin-optimizer"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              LinkedIn Optimizer
            </Link>
            <Link
              to="/sign-in"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;