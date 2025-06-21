import { View, Trash2, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast as sonner } from "sonner";
import { useDeleteAdmission } from "../../hooks/admissionHooks/useAdmission";
function AdmissionItem({ admission, openInfo }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { deleteAdmission, isPending: isDeleting } = useDeleteAdmission();
  const handleDelete = () => {
    sonner("Are you sure you want to delete?", {
      action: {
        label: "Delete",
        onClick: () => deleteAdmission(admission.id),
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
    <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
      {/* Contact Info Cell */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {`${admission.firstName} ${admission.lastName}`}
            </h3>
            <a
              href={`mailto:${admission.email}`}
              className="text-xs text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {admission.email}
            </a>
          </div>
        </div>
      </td>

      {/* Phone Number Cell */}
      <td className="px-6 py-4 whitespace-nowrap">
        <a
          href={`tel:${admission.phone}`}
          className="text-sm text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {admission.phone}
        </a>
      </td>

      {/* Service Type Cell */}
      <td className="hidden px-6 py-4 md:table-cell whitespace-nowrap">
        <span className="inline-flex px-3 py-1 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
          {admission.country}
        </span>
      </td>

      {/* Actions Cell */}
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {/* Desktop Actions */}
          <div className="hidden space-x-2 md:flex">
            <button
              onClick={() => openInfo(admission)}
              className="p-2 text-blue-600 transition-colors rounded-full hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              title="Edit Request"
              aria-label="Edit Request"
            >
              <View size={16} />
            </button>
            <button
              disabled={isDeleting}
              onClick={handleDelete}
              className="p-2 text-red-600 transition-colors rounded-full hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30 disabled:opacity-50"
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
              className="p-2 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="More options"
              aria-expanded={showDropdown}
            >
              <MoreVertical
                size={16}
                className="text-gray-500 dark:text-gray-400"
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  <button
                    onClick={() => openInfo(admission)}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 group dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <View
                      size={16}
                      className="mr-3 text-blue-500 group-hover:text-blue-600"
                    />
                    View More
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 group dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                    role="menuitem"
                  >
                    <Trash2
                      size={16}
                      className="mr-3 text-red-500 group-hover:text-red-600"
                    />
                    Delete Admission
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

export default AdmissionItem;
