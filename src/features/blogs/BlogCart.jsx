import { useTranslation } from "react-i18next";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
function BlogCart({ blog }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <article
      key={blog.id}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-full capitalize">
            {t(`blog.categories.${blog.category[lang]}`, blog.category[lang])}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{blog.date}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {blog.title[lang]}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {blog.excerpt[lang]}
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {blog.author[lang]}
            </span>
          </div>

          <Link
            to={`/blogs/${blog.title[lang]}`}
            state={blog}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm transition-colors"
          >
            {t("blog.readMore")}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCart;
