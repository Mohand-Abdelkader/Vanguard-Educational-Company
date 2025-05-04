import { useBlogs } from "../../hooks/blogCustomHooks/useBlogs";
import { Plus, Minus } from "lucide-react";
import List from "../../ui/List";
import BlogItem from "./BlogItem";
import Loader from "../../ui/Loader";
import { useState } from "react";
import BlogForm from "./BlogForm";
function AdminBlogs() {
  const { blogs, isLoading } = useBlogs();
  const [isOpen, setIsOpen] = useState(false);
  console.log(blogs);
  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col justify-between items-start mb-6 md:flex-row md:items-center">
        <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200 md:mb-0">
          Blogs
        </h1>

        <button
          onClick={() => setIsOpen((i) => !i)}
          className="flex items-center px-4 py-2 text-white rounded-lg shadow-sm transition-colors bg-primary hover:bg-primary-dark"
        >
          {isOpen ? (
            <Minus size={18} className="mr-2" />
          ) : (
            <Plus size={18} className="mr-2" />
          )}
          <span>{isOpen ? "Close Form" : "Add Blogs"}</span>
        </button>
      </div>
      {isOpen && <BlogForm setIsOpen={setIsOpen} />}
      <List
        items={blogs}
        render={(blog) => <BlogItem blog={blog} key={blog.id} />}
        firstCol="Title in English"
        secondCol="Title in Arabic"
        thirdCol="Category"
      />
    </div>
  );
}

export default AdminBlogs;
