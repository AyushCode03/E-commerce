const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        {/* Outer Circle */}
        <div className="w-20 h-20 border-4 border-blue-200 border-t-4 rounded-full animate-pulse"></div>

        {/* Inner Spinning Circle */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-500 border-t-4 animate-spin rounded-full"></div>

        {/* Accessibility Text */}
        <div className="sr-only">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
