import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCreateLogo } from "../../hooks/logosCustomHooks/useCreateLogo";
import { useUpdateLogo } from "../../hooks/logosCustomHooks/useUpdateLogo";
import { uploadFileToCloudinary } from "../../utils/helper";
function LogoForm({ setIsOpen, editLogo }) {
  const isEditSession = !!editLogo;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      link: "",
      url: "",
    },
  });

  const { createLogo, isCreating, error: createError } = useCreateLogo();
  const { updateLogo, isUpdating, error: updateError } = useUpdateLogo();
  const [uploadingLogo, isUploadingLogo] = useState(false);

  // Pre-fill form when editing
  useEffect(() => {
    if (editLogo) {
      setValue("name", editLogo.name);
      setValue("link", editLogo.link);
      setValue("url", editLogo.url);
    }
  }, [editLogo, setValue]);

  const onSubmit = async (data) => {
    if (isEditSession) {
      if (data.img[0]) {
        const file = data.img[0];
        isUploadingLogo(true);
        const url = await uploadFileToCloudinary(file);
        isUploadingLogo(false);
        data.url = url;
      }
      updateLogo(
        { id: editLogo.id, newData: data },
        {
          onSuccess: () => {
            reset();
            setIsOpen(false);
          },
        }
      );
    } else {
      const file = data.img[0];
      isUploadingLogo(true);
      const url = await uploadFileToCloudinary(file);
      isUploadingLogo(false);
      data.url = url;
      createLogo(data, {
        onSuccess: () => {
          reset();
          setIsOpen(false);
        },
      });
    }
  };

  const isLoading = isCreating || isUpdating || uploadingLogo;
  const error =
    createError || updateError || errors.name || errors.link || errors.url;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md mx-auto mb-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 border-b pb-3 dark:border-gray-700">
        {isEditSession ? "Edit Partner" : "Add New Partner"}
      </h2>

      <div className="space-y-5">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Partner Name
          </label>
          <input
            type="text"
            placeholder="Enter partner name"
            {...register("name", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Partner Website
          </label>
          <input
            type="text"
            placeholder="https://example.com"
            {...register("link", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Partner Logo
          </label>
          {isEditSession && (
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
                  src={editLogo?.url}
                  alt={editLogo?.name || "Partner logo"}
                  className="h-20 object-contain rounded shadow-sm"
                />
              </div>
            </div>
          )}
          <div className="relative">
            <label
              for="file_input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              id="file_input"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
              accept="image/*"
              multiple={false}
              {...register("img", { required: !isEditSession })}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
            Error: All Field ara required
          </div>
        )}

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
              {isEditSession ? "Updating..." : "Creating..."}
            </span>
          ) : isEditSession ? (
            "Update Partner"
          ) : (
            "Create Partner"
          )}
        </button>
      </div>
    </form>
  );
}

export default LogoForm;
