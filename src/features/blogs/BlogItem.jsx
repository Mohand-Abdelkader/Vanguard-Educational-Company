import { Edit, Trash2, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDeleteBlog } from "../../hooks/blogCustomHooks/useDeleteBlog";
import { toast as sonner } from "sonner";
function BlogItem({ blog, openEditForm }) {
  const { deleteBlog } = useDeleteBlog();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDelete = () => {
    sonner("Are you sure you want to delete?", {
      action: {
        label: "Delete",
        onClick: () => deleteBlog(blog.id),
      },
    });
  };
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
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="object-cover w-10 h-10 border-2 border-gray-200 rounded-full dark:border-gray-600"
              src={blog.image}
              alt={`${blog.title.en}'s profile`}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {blog.title.en}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 dark:text-gray-200">
          {blog.author.en}
        </div>
      </td>

      <td className="hidden px-6 py-4 md:table-cell whitespace-nowrap">
        <span className="inline-flex px-2 py-1 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
          {blog.category.en}
        </span>
      </td>

      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="relative inline-block text-left" ref={dropdownRef}>
          {/* Desktop view - show buttons */}
          <div className="hidden space-x-2 md:flex">
            <button
              onClick={() => openEditForm(blog)}
              className="p-1 text-blue-600 transition-colors rounded-full hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              title="Edit member"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={handleDelete}
              className="p-1 text-red-600 transition-colors rounded-full hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/30"
              title="Delete member"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Mobile view - dropdown menu */}
          <div className="md:hidden">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="p-1 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <MoreVertical
                size={18}
                className="text-gray-500 dark:text-gray-400"
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button
                    onClick={() => openEditForm(blog)}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <Edit size={16} className="mr-2 text-blue-500" />
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <Trash2 size={16} className="mr-2 text-red-500" />
                    Delete
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

export default BlogItem;
