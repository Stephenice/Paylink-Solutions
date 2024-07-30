import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 dark:text-blue-300">
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
