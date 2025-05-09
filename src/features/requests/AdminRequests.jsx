import Loader from "../../ui/Loader";
import List from "../../ui/List";
import { useRequests } from "../../hooks/requestsCustomHooks/useRequests";
import RequestItem from "./RequestItem";
function AdminRequests() {
  const { requests, isLoading } = useRequests();
  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Request from the Clients
        </h1>
      </div>

      <List
        items={requests}
        render={(request) => <RequestItem request={request} key={request.id} />}
        firstCol="client Name"
        secondCol="clint Phone Number"
        thirdCol="Service Requested"
      />
    </div>
  );
}

export default AdminRequests;
