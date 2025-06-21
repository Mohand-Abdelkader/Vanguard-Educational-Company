import Loader from "../../ui/Loader";
import List from "../../ui/List";
import { exportToExcel } from "../../utils/helper";
import { useAdmission } from "../../hooks/admissionHooks/useAdmission";
import { useState } from "react";
import AdmissionItem from "./AdmissionItem";
import AdmissionInfo from "./AdmissionInfo";
function AdminAdmission() {
  const [isOpen, setIsOpen] = useState(false);
  const [infoRequest, setInfoRequest] = useState(null);
  const { admissions, isLoading } = useAdmission();
  function openInfo(request) {
    setInfoRequest(request);
    setIsOpen(true);
  }
  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Admissions for Alfred Nobel University
        </h1>
        <button
          onClick={() => exportToExcel(admissions, "dashboard_data")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Download Excel
        </button>
      </div>

      <List
        items={admissions}
        render={(admission) => (
          <AdmissionItem
            admission={admission}
            key={admission.id}
            openInfo={openInfo}
          />
        )}
        firstCol="client Name"
        secondCol="clint Phone Number"
        thirdCol="Student Country Requested"
      />
      <AdmissionInfo
        isOpen={isOpen}
        value={infoRequest}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default AdminAdmission;
