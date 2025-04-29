import React from 'react';

interface ErrorDisplayProps {
  error: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full text-center">
      <div className="text-red-500 text-xl mb-2">⚠️ Error</div>
      <div className="text-gray-700">{error}</div>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

export default ErrorDisplay; 