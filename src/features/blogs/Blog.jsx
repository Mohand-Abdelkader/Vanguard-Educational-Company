import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import BlogCart from "./BlogCart";
import { useBlogs } from "../../hooks/blogCustomHooks/useBlogs";
import Loader from "../../ui/Loader";

function BlogPage() {
  const { t, i18n } = useTranslation();

  const [searchTerm, setSearchTerm] = useState("");

  const lang = i18n.language;

  const { blogs, isLoading } = useBlogs();
  // Filter blogs based on search term and category
  if (isLoading) return <Loader size="large" />;
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title[lang].toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt[lang].toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("blog.title")}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("blog.description")}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder={t("blog.searchPlaceholder", "Search articles...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCart blog={blog} key={blog.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
              {t("blog.noResults", "No articles found matching your search.")}
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {t(
                "blog.tryDifferent",
                "Try different keywords or browse all categories."
              )}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
              }}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t("blog.resetFilters", "Reset Filters")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
