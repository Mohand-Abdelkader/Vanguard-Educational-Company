import { View, Trash2, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast as sonner } from "sonner";
import { useDeleteRequest } from "../../hooks/requestsCustomHooks/useDeleteRequest";
function RequestItem({ request, openInfo }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { deleteRequest, isDeleting } = useDeleteRequest();
  const handleDelete = () => {
    sonner("Are you sure you want to delete?", {
      action: {
        label: "Delete",
        onClick: () => deleteRequest(request.id),
      },
    });
  };

  //
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      {/* Contact Info Cell */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {request.name}
            </h3>
            <a
              href={`mailto:${request.email}`}
              className="text-xs text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {request.email}
            </a>
          </div>
        </div>
      </td>

      {/* Phone Number Cell */}
      <td className="px-6 py-4 whitespace-nowrap">
        <a
          href={`tel:${request.phoneNumber}`}
          className="text-sm text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {request.phoneNumber}
        </a>
      </td>

      {/* Service Type Cell */}
      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          {request.serviceRequested}
        </span>
      </td>

      {/* Actions Cell */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => openInfo(request)}
              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              title="Edit Request"
              aria-label="Edit Request"
            >
              <View size={16} />
            </button>
            <button
              disabled={isDeleting}
              onClick={handleDelete}
              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors disabled:opacity-50"
              title="Delete Request"
              aria-label="Delete Request"
            >
              <Trash2 size={16} />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="More options"
              aria-expanded={showDropdown}
            >
              <MoreVertical
                size={16}
                className="text-gray-500 dark:text-gray-400"
              />
            </button>

            {showDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu">
                  <button
                    className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <View
                      size={16}
                      className="mr-3 text-blue-500 group-hover:text-blue-600"
                    />
                    Edit Request
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                    role="menuitem"
                  >
                    <Trash2
                      size={16}
                      className="mr-3 text-red-500 group-hover:text-red-600"
                    />
                    Delete Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
}

export default RequestItem;
