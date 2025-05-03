import { Plus } from "lucide-react";
import { useLogos } from "../../hooks/logosCustomHooks/useLogos";
import List from "../../ui/List";
import Loader from "../../ui/Loader";
import LogoItem from "./LogoItem";
import LogoForm from "./LogoForm";
import { useState } from "react";
function AdminLogos() {
  const [isOpen, setIsOpen] = useState(false);
  const { logos, isLoading } = useLogos();
  console.log(logos);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
            Logos
          </h1>

          <button
            onClick={() => setIsOpen((i) => !i)}
            className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-sm"
          >
            <Plus size={18} className="mr-2" />
            <span>{isOpen ? "Close Form" : "Add Logos"}</span>
          </button>
        </div>
        {isOpen && <LogoForm setIsOpen={setIsOpen} />}
        <List
          items={logos}
          render={(logo) => <LogoItem logo={logo} key={logo.id} />}
          firstCol="Partner"
          secondCol="Partner website"
        />
      </div>
    </>
  );
}

export default AdminLogos;
