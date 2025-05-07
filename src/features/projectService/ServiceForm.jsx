import { useForm } from "react-hook-form";
import InputEnAr from "../../ui/InputEnAr";
import * as LucideIcons from "lucide-react";
import TextAreaEnAr from "../../ui/TextAreaEnAr";
import { icons } from "../../utils/helper";
import { useState, useEffect } from "react";
import { useCreateService } from "../../hooks/projectServiceCustomHooks/useCreateService";
import { useUpdateService } from "../../hooks/projectServiceCustomHooks/useUpdateService";
function ServiceForm({ setIsOpen, editService }) {
  const isEditingSession = Boolean(editService);
  const [selectedIcon, setSelectedIcon] = useState(
    editService?.icon || "Service"
  );

  const { createService, isCreating } = useCreateService();
  const { updateService, isUpdating } = useUpdateService();

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: { en: "", ar: "" },
      description: { en: "", ar: "" },
    },
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editService) {
      setValue("title.ar", editService.title.ar);
      setValue("title.en", editService.title.en);
      setValue("description.ar", editService.description.ar);
      setValue("description.en", editService.description.en);
      setValue("info.ar", editService.info.ar);
      setValue("info.en", editService.info.en);
      if (editService.icon) {
        setSelectedIcon(editService.icon);
      }
    }
  }, [editService, setValue]);

  const onSubmit = async (data) => {
    // Add the selected icon to the form data
    data.icon = selectedIcon;

    if (isEditingSession) {
      updateService(
        { id: editService.id, newData: data },
        {
          onSuccess: () => {
            reset();
            setIsOpen(false);
          },
        }
      );
    } else {
      createService(data, {
        onSuccess: () => {
          reset();
          setIsOpen(false);
        },
      });
    }
  };

  const isLoading = isCreating || isUpdating;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl p-6 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <h2 className="pb-3 mb-6 text-xl font-semibold text-gray-800 border-b dark:text-white dark:border-gray-700">
        {isEditingSession ? "Edit Service" : "Add New Service"}
      </h2>

      <div className="space-y-6">
        {/* Title - English and Arabic */}
        <InputEnAr
          disabled={isLoading}
          register={register}
          name="title"
          isRequired={true}
          englishLabel="Service Title (English)"
          englishPlaceHolder="Enter Service title in English"
          arabicLabel="عنوان الخدمه (العربية)"
          arabicPlaceHolder="أدخل عنوان الخدمه بالعربية"
        />

        {/* Description - English and Arabic */}
        <TextAreaEnAr
          register={register}
          name="description"
          englishLabel={"Service Description (English)"}
          englishPlaceHolder={"Enter the Service description"}
          arabicLabel={"وصف الخدمه"}
          arabicPlaceHolder={"ادخل وصف الخدمه"}
          isRequired={true}
          disabled={isLoading}
        />
        <TextAreaEnAr
          register={register}
          name="info"
          englishLabel={"Service Details info (English)"}
          englishPlaceHolder={"Enter the Service Details info"}
          arabicLabel={"وصف تفصيلي الخدمه"}
          arabicPlaceHolder={"ادخل وصف تفصيلي الخدمه"}
          isRequired={true}
          disabled={isLoading}
        />

        {/* Activity Icon Selector */}
        {/* Icon Picker */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Choose an Service Icon
          </label>
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-3 max-h-[200px] overflow-y-auto border p-3 rounded-md dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
            {icons.map((name) => {
              const IconComponent = LucideIcons[name];
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setSelectedIcon(name)}
                  className={`flex flex-col items-center justify-center p-2 rounded border hover:bg-gray-200 dark:hover:bg-gray-600 transition ${
                    selectedIcon === name
                      ? "bg-primary text-white border-primary"
                      : "border-transparent"
                  }`}
                >
                  <IconComponent size={20} className="dark:text-gray-300" />
                  <span className="text-[10px] mt-1 truncate dark:text-gray-300">
                    {name}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Selected Icon: <strong>{selectedIcon}</strong>
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center w-full px-4 py-2 mt-2 font-medium text-white transition-colors duration-200 bg-primary hover:bg-primary-dark rounded-md shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
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
            "Update Service "
          ) : (
            "Create Service"
          )}
        </button>
      </div>
    </form>
  );
}

export default ServiceForm;
