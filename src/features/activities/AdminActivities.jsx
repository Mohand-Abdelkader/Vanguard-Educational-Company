import { Plus, Minus } from "lucide-react";
import { useActivities } from "../../hooks/activitesCustomHooks/useActivities";
import Loader from "../../ui/Loader";
import List from "../../ui/List";
import ActivityItem from "./ActivityItme";
import ActivityForm from "./ActivityForm";
import { useState } from "react";
function AdminActivities() {
  const { activities, isLoading } = useActivities();
  const [isOpen, setIsOpen] = useState(false);
  const [editActivity, setEditActivity] = useState(null);

  function toggleForm() {
    setIsOpen((i) => !i);
    setEditActivity(null);
  }
  function openEditForm(activity) {
    setEditActivity(activity);
    setIsOpen(true);
  }
  console.log(activities);
  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Activity
        </h1>

        <button
          onClick={toggleForm}
          className="flex items-center px-4 py-2 text-white rounded-lg shadow-sm transition-colors bg-primary hover:bg-primary-dark"
        >
          {isOpen ? (
            <Minus size={18} className="mr-2" />
          ) : (
            <Plus size={18} className="mr-2" />
          )}
          <span>{isOpen ? "Close Form" : "Add Activity"}</span>
        </button>
      </div>
      {isOpen && (
        <ActivityForm setIsOpen={setIsOpen} editActivity={editActivity} />
      )}
      <List
        items={activities}
        render={(activity) => (
          <ActivityItem
            activity={activity}
            key={activity.id}
            openEditForm={openEditForm}
          />
        )}
        firstCol="Title in English"
        secondCol="Title in Arabic"
      />
    </div>
  );
}

export default AdminActivities;
