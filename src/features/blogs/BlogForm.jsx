import { useForm } from "react-hook-form";
import InputEnAr from "../../ui/InputEnAr";
import { uploadFileToCloudinary } from "../../utils/helper";
import { useCreateBlog } from "../../hooks/blogCustomHooks/useCreateBlog";
import { useState } from "react";
function BlogForm({ setIsOpen }) {
  const [uploadingPhoto, isUploadingPhoto] = useState(false);
  const { isCreating, addBlog } = useCreateBlog();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: { en: "", ar: "" },
      excerpt: { en: "", ar: "" },
      description: { en: "", ar: "" },
      category: "",
      author: { en: "", ar: "" },
    },
  });

  // Pre-fill form when editing
  //   useEffect(() => {
  //     if (editLogo) {
  //       setValue("name", editLogo.name);
  //       setValue("link", editLogo.link);
  //       setValue("url", editLogo.url);
  //     }
  //   }, [editLogo, setValue]);

  const onSubmit = async (data) => {
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
  };

  const isLoading = isCreating || uploadingPhoto;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-4xl mx-auto mb-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 border-b pb-3 dark:border-gray-700">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Blog Summary (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter a brief summary of the blog"
              {...register("excerpt.en", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors text-right"
              rows="3"
              dir="rtl"
            ></textarea>
          </div>
        </div>

        {/* Description - English and Arabic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Blog Content (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter the full blog content"
              {...register("description.en", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors text-right"
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          />
        </div>
        {/* Blog Image */}
        {/* Blog Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Blog Cover Image
          </label>
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
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
                disabled={isLoading}
                {...register("img", {
                  required: true,
                  onChange: (e) => {
                    if (e.target.files.length > 0) {
                      document.getElementById(
                        "selected-file-name"
                      ).textContent = e.target.files[0].name;
                      document
                        .getElementById("file-name-display")
                        .classList.remove("hidden");
                    }
                  },
                })}
              />
            </label>
          </div>

          {/* Simple file name display */}
          <div
            id="file-name-display"
            className="hidden mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded text-sm"
          >
            Selected file:{" "}
            <span id="selected-file-name" className="font-medium"></span>
          </div>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="w-full mt-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md shadow-sm transition-colors duration-200 flex justify-center items-center"
        >
          {isLoading ? "Creating ..." : "Create Blog Post"}
        </button>
      </div>
    </form>
  );
}

export default BlogForm;
