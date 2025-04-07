export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg text-gray-600">This is a simple example of a React component with Tailwind CSS.</p>
      <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
        Click Me
      </button>
    </div>
  );
};
