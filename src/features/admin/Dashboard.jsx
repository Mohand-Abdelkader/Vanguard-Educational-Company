function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="  dark:text-gray-300 text-2xl font-bold mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Dashboard content will appear here
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
