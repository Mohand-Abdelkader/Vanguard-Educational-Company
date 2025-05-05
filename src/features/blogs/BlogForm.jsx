import { useForm } from "react-hook-form";
import InputEnAr from "../../ui/InputEnAr";
import { uploadFileToCloudinary } from "../../utils/helper";
import { useCreateBlog } from "../../hooks/blogCustomHooks/useCreateBlog";
import { useState, useEffect } from "react";
import { useUpdateBlog } from "../../hooks/blogCustomHooks/useUpdateBlog";
function BlogForm({ setIsOpen, editBlog }) {
  const isEditingSession = Boolean(editBlog);

  const [uploadingPhoto, isUploadingPhoto] = useState(false);
  const { isCreating, addBlog } = useCreateBlog();
  const { updateBlog, isUpdating } = useUpdateBlog();
  console.log(editBlog);
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: { en: "", ar: "" },
      excerpt: { en: "", ar: "" },
      description: { en: "", ar: "" },
      category: { en: "", ar: "" },
      author: { en: "", ar: "" },
    },
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editBlog) {
      setValue("title.ar", editBlog.title.ar);
      setValue("title.en", editBlog.title.en);
      setValue("excerpt.ar", editBlog.excerpt.ar);
      setValue("excerpt.en", editBlog.excerpt.en);
      setValue("description.ar", editBlog.description.ar);
      setValue("description.en", editBlog.description.en);
      setValue("category.ar", editBlog.category.ar);
      setValue("category.en", editBlog.category.en);
      setValue("author.ar", editBlog.author.ar);
      setValue("author.en", editBlog.author.en);
      setValue("date", editBlog.date);
    }
  }, [editBlog, setValue]);

  const onSubmit = async (data) => {
    if (isEditingSession) {
      console.log(data.img[0]);
      if (data.img[0]) {
        const file = data.img[0];
        isUploadingPhoto(true);
        const url = await uploadFileToCloudinary(file);
        isUploadingPhoto(false);
        data.image = url;
      }
      updateBlog(
        { id: editBlog.id, newData: data },
        {
          onSuccess: () => {
            reset();
            setIsOpen(false);
          },
        }
      );
    } else {
      const file = data.img[0];
      isUploadingPhoto(true);
      const url = await uploadFileToCloudinary(file);
      isUploadingPhoto(false);
      data.image = url;
      addBlog(data, {
        onSuccess: () => {
          reset();
          setIsOpen(false);
        },
      });
    }
  };

  const isLoading = isCreating || uploadingPhoto || isUpdating;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl p-6 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <h2 className="pb-3 mb-6 text-xl font-semibold text-gray-800 border-b dark:text-white dark:border-gray-700">
        Add New Blog
      </h2>

      <div className="space-y-6">
        {/* Title - English and Arabic */}
        <InputEnAr
          disabled={isLoading}
          register={register}
          name="title"
          isRequired={true}
          englishLabel=" Blog Title (English)"
          englishPlaceHolder="Enter blog title in English"
          arabicLabel="عنوان المدونة (العربية)"
          arabicPlaceHolder="ادخل عنوان المدونه بالعريبة"
        />
        {/* Excerpt - English and Arabic */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Blog Summary (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter a brief summary of the blog"
              {...register("excerpt.en", { required: true })}
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="3"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              ملخص المدونة (العربية)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="أدخل ملخصًا موجزًا للمدونة"
              {...register("excerpt.ar", { required: true })}
              className="w-full px-4 py-2 text-right text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="3"
              dir="rtl"
            ></textarea>
          </div>
        </div>

        {/* Description - English and Arabic */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Blog Content (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter the full blog content"
              {...register("description.en", { required: true })}
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="6"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              محتوى المدونة (العربية)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="أدخل المحتوى الكامل للمدونة"
              {...register("description.ar", { required: true })}
              className="w-full px-4 py-2 text-right text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="6"
              dir="rtl"
            ></textarea>
          </div>
        </div>

        {/* Category and Author */}
        <InputEnAr
          register={register}
          name="author"
          isRequired={true}
          englishLabel="Author (English)"
          englishPlaceHolder="Enter author name in English"
          arabicLabel="اسم الكاتب (العربية)"
          arabicPlaceHolder="أدخل اسم الكاتب بالعربية"
          disabled={isLoading}
        />
        <InputEnAr
          register={register}
          name="category"
          isRequired={true}
          englishLabel="Category (English)"
          englishPlaceHolder="Enter blog category in English"
          arabicLabel="تصنيف المدونة (العربية)"
          arabicPlaceHolder="أدخل تصنيف المدونة بالعربية"
          disabled={isLoading}
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Publication Date
          </label>
          <input
            type="date"
            disabled={isLoading}
            {...register("date", { required: true })}
            className="w-full px-4 py-2 text-gray-900 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        {/* Blog Image */}
        {/* Blog Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Blog Cover Image
          </label>
          {isEditingSession && (
            <div className="mb-3 p-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  Current logo:
                </span>
                <span className="text-xs text-blue-500 dark:text-blue-400">
                  Change below
                </span>
              </div>
              <div className="flex justify-center p-3 bg-white dark:bg-gray-700 rounded border border-gray-100 dark:border-gray-600">
                <img
                  src={editBlog?.image}
                  alt={editBlog?.title || "Partner logo"}
                  className="h-20 object-contain rounded shadow-sm"
                />
              </div>
            </div>
          )}
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-10 h-10 mb-3 text-gray-400 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG, GIF up to 5MB
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                multiple={false}
                className="hidden"
                {...register("img", { required: !isEditingSession })}
              />
            </label>
          </div>

          {/* Simple file name display */}
          <div
            id="file-name-display"
            className="hidden p-2 mt-2 text-sm bg-gray-100 rounded dark:bg-gray-700"
          >
            Selected file:{" "}
            <span id="selected-file-name" className="font-medium"></span>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md shadow-sm transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {isEditingSession ? "Updating..." : "Creating..."}
            </span>
          ) : isEditingSession ? (
            "Update Blog"
          ) : (
            "Create Blog"
          )}
        </button>
      </div>
    </form>
  );
}

export default BlogForm;
