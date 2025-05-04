import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

function BlogDetails() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const blog = location.state;
  const lang = i18n.language;

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          {t("blog.backToBlogs", "Back to Blogs")}
        </Link>

        {/* Blog header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {blog.title[lang]}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{blog.author[lang]}</span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img
            src={blog.image}
            alt={blog.title[lang]}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary prose-a:text-primary mb-12 text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.description[lang] }}
        />

        {/* Share section */}
      </div>
    </div>
  );
}

export default BlogDetails;
