import { Plus, Minus } from "lucide-react";
import Loader from "../../ui/Loader";
import List from "../../ui/List";
import ServiceForm from "./ServiceForm";
import { useState } from "react";
import { useService } from "../../hooks/projectServiceCustomHooks/useService";
import ServiceItem from "./ServiceItem";
function AdminService() {
  const { projectService, isLoading } = useService();
  const [isOpen, setIsOpen] = useState(false);
  const [editService, setEditService] = useState(null);

  function toggleForm() {
    setIsOpen((i) => !i);
    setEditService(null);
  }
  function openEditForm(service) {
    setEditService(service);
    setIsOpen(true);
  }

  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Project Service
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
          <span>{isOpen ? "Close Form" : "Add Service"}</span>
        </button>
      </div>
      {isOpen && (
        <ServiceForm setIsOpen={setIsOpen} editService={editService} />
      )}
      <List
        items={projectService}
        render={(service) => (
          <ServiceItem
            service={service}
            key={service.id}
            openEditForm={openEditForm}
          />
        )}
        firstCol="Title in English"
        secondCol="Title in Arabic"
      />
    </div>
  );
}

export default AdminService;
