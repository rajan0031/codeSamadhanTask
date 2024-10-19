import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing an error icon
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

function Error() {
    const navigate = useNavigate(); // Using navigation to redirect the user back

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Icon with bounce animation */}
            <FaExclamationTriangle className="text-red-500 text-8xl animate-bounce" />

            {/* Error message */}
            <h1 className="text-4xl font-bold text-gray-800 mt-8 animate-fade-in">
                Oops! Something went wrong.
            </h1>

            <p className="text-gray-600 text-lg mt-4 animate-fade-in delay-1s">
                We can't find the page you're looking for.
            </p>

            {/* Button to redirect */}
            <button
                onClick={() => navigate('/')} // Redirect to homepage
                className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Go Back Home
            </button>
        </div>
    );
}

export default Error;
