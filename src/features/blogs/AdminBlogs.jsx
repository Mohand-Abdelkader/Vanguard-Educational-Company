import { useBlogs } from "../../hooks/blogCustomHooks/useBlogs";
import { Plus } from "lucide-react";
import List from "../../ui/List";
import BlogItem from "./BlogItem";
import Loader from "../../ui/Loader";
function AdminBlogs() {
  const { blogs, isLoading } = useBlogs();
  console.log(blogs);

  if (isLoading) return <Loader />;
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 md:mb-0">
          Blogs
        </h1>

        <button className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-sm">
          <Plus size={18} className="mr-2" />
          <span>Add Blogs</span>
        </button>
      </div>
      <List
        items={blogs}
        render={(blog) => <BlogItem blog={blog} key={blog.id} />}
        firstCol="Title in English"
        secondCol="Title in Arabic"
      />
    </div>
  );
}

export default AdminBlogs;
