import Stats from "./Stats";

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="  dark:text-gray-300 text-2xl font-bold mb-6">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Stats />
      </div>
    </div>
  );
}

export default Dashboard;
