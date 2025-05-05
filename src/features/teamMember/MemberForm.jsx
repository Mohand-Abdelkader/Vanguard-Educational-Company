import { useForm } from "react-hook-form";
import InputEnAr from "../../ui/InputEnAr";
import { uploadFileToCloudinary } from "../../utils/helper";
import { useState, useEffect } from "react";
import { useCreateMember } from "../../hooks/teamMemberCustomHook/useCreateMember";
function MemberForm({ setIsOpen, editMember }) {
  const isEditingSession = Boolean(editMember);
  const [uploadingPhoto, isUploadingPhoto] = useState(false);
  const [enExperiences, setEnExperiences] = useState([""]);
  const [arExperiences, setArExperiences] = useState([""]);
  const { isCreating, addMember } = useCreateMember();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: { en: "", ar: "" },
      title: { en: "", ar: "" },
      subtitle: { en: "", ar: "" },
      summary: { en: "", ar: "" },
      description: { en: "", ar: "" },
      education: { en: "", ar: "" },
      address: { en: "", ar: "" },
      experiences: { en: [], ar: [] },
      image: "",
    },
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editMember) {
      setValue("name.ar", editMember.name.ar);
      setValue("name.en", editMember.name.en);
      setValue("title.ar", editMember.title.ar);
      setValue("title.en", editMember.title.en);
      setValue("subtitle.ar", editMember.subtitle.ar);
      setValue("subtitle.en", editMember.subtitle.en);
      setValue("summary.ar", editMember.summary.ar);
      setValue("summary.en", editMember.summary.en);
      setValue("description.ar", editMember.description.ar);
      setValue("description.en", editMember.description.en);
      setValue("education.ar", editMember.education.ar);
      setValue("education.en", editMember.education.en);
      setValue("address.ar", editMember.address.ar);
      setValue("address.en", editMember.address.en);

      if (editMember.experiences?.en?.length) {
        setEnExperiences(editMember.experiences.en);
      }
      if (editMember.experiences?.ar?.length) {
        setArExperiences(editMember.experiences.ar);
      }
    }
  }, [editMember, setValue]);

  const onSubmit = async (data) => {
    console.log(data);
    isUploadingPhoto(true);
    const url = await uploadFileToCloudinary(data.image[0]);
    isUploadingPhoto(false);
    data.image = url;

    // Add experiences from state
    data.experiences = {
      en: enExperiences.filter((exp) => exp.trim() !== ""),
      ar: arExperiences.filter((exp) => exp.trim() !== ""),
    };

    console.log(data);
    addMember(data);
    reset();
    setIsOpen(false);
  };

  const handleAddExperience = (language) => {
    if (language === "en") {
      setEnExperiences([...enExperiences, ""]);
    } else {
      setArExperiences([...arExperiences, ""]);
    }
  };

  const handleRemoveExperience = (index, language) => {
    if (language === "en") {
      const newExperiences = [...enExperiences];
      newExperiences.splice(index, 1);
      setEnExperiences(newExperiences);
    } else {
      const newExperiences = [...arExperiences];
      newExperiences.splice(index, 1);
      setArExperiences(newExperiences);
    }
  };

  const handleExperienceChange = (index, value, language) => {
    if (language === "en") {
      const newExperiences = [...enExperiences];
      newExperiences[index] = value;
      setEnExperiences(newExperiences);
    } else {
      const newExperiences = [...arExperiences];
      newExperiences[index] = value;
      setArExperiences(newExperiences);
    }
  };

  const isLoading = uploadingPhoto || isCreating;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl p-6 mx-auto mb-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
      <h2 className="pb-3 mb-6 text-xl font-semibold text-gray-800 border-b dark:text-white dark:border-gray-700">
        {isEditingSession ? "Edit Team Member" : "Add New Team Member"}
      </h2>

      <div className="space-y-6">
        {/* Name - English and Arabic */}
        <InputEnAr
          disabled={isLoading}
          register={register}
          name="name"
          isRequired={true}
          englishLabel="Name (English)"
          englishPlaceHolder="Enter member name in English"
          arabicLabel="الاسم (العربية)"
          arabicPlaceHolder="أدخل اسم العضو بالعربية"
        />

        {/* Title - English and Arabic */}
        <InputEnAr
          disabled={isLoading}
          register={register}
          name="title"
          isRequired={true}
          englishLabel="Title (English)"
          englishPlaceHolder="Enter member title in English"
          arabicLabel="المسمى الوظيفي (العربية)"
          arabicPlaceHolder="أدخل المسمى الوظيفي بالعربية"
        />

        {/* Subtitle - English and Arabic */}
        <InputEnAr
          disabled={isLoading}
          register={register}
          name="subtitle"
          isRequired={true}
          englishLabel="Detailed Title (English)"
          englishPlaceHolder="Enter detailed title in English"
          arabicLabel="المسمى الوظيفي التفصيلي (العربية)"
          arabicPlaceHolder="أدخل المسمى الوظيفي التفصيلي بالعربية"
        />

        {/* Summary - English and Arabic */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Summary (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter a brief summary"
              {...register("summary.en", { required: true })}
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="3"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              الملخص (العربية)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="أدخل ملخصًا موجزًا"
              {...register("summary.ar", { required: true })}
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
              Description (English)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="Enter full description"
              {...register("description.en", { required: true })}
              className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="6"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              الوصف (العربية)
            </label>
            <textarea
              disabled={isLoading}
              placeholder="أدخل الوصف الكامل"
              {...register("description.ar", { required: true })}
              className="w-full px-4 py-2 text-right text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
              rows="6"
              dir="rtl"
            ></textarea>
          </div>
        </div>

        {/* Education - English and Arabic */}
        <InputEnAr
          register={register}
          name="education"
          isRequired={true}
          englishLabel="Education (English)"
          englishPlaceHolder="Enter education details in English"
          arabicLabel="التعليم (العربية)"
          arabicPlaceHolder="أدخل تفاصيل التعليم بالعربية"
          disabled={isLoading}
        />

        {/* Address - English and Arabic */}
        <InputEnAr
          register={register}
          name="address"
          isRequired={true}
          englishLabel="Address (English)"
          englishPlaceHolder="Enter address in English"
          arabicLabel="العنوان (العربية)"
          arabicPlaceHolder="أدخل العنوان بالعربية"
          disabled={isLoading}
        />

        {/* Experiences - English */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Experiences (English)
          </label>
          {enExperiences.map((experience, index) => (
            <div
              key={`en-exp-${index}`}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={experience}
                onChange={(e) =>
                  handleExperienceChange(index, e.target.value, "en")
                }
                placeholder="Enter experience"
                className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
                disabled={isLoading}
              />
              {enExperiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index, "en")}
                  className="p-2 text-red-500 hover:text-red-700"
                  disabled={isLoading}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddExperience("en")}
            className="px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            Add Experience
          </button>
        </div>

        {/* Experiences - Arabic */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            الخبرات (العربية)
          </label>
          {arExperiences.map((experience, index) => (
            <div
              key={`ar-exp-${index}`}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <input
                type="text"
                value={experience}
                onChange={(e) =>
                  handleExperienceChange(index, e.target.value, "ar")
                }
                placeholder="أدخل الخبرة"
                className="w-full px-4 py-2 text-right text-gray-900 placeholder-gray-400 transition-colors bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
                dir="rtl"
                disabled={isLoading}
              />
              {arExperiences.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveExperience(index, "ar")}
                  className="p-2 text-red-500 hover:text-red-700"
                  disabled={isLoading}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddExperience("ar")}
            className="px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            إضافة خبرة
          </button>
        </div>

        {/* Member Image */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Member Photo
          </label>
          {isEditingSession && editMember?.image && (
            <div className="p-2 mb-3 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800/50 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                  Current photo:
                </span>
                <span className="text-xs text-blue-500 dark:text-blue-400">
                  Change below
                </span>
              </div>
              <div className="flex justify-center p-3 bg-white border border-gray-100 rounded dark:bg-gray-700 dark:border-gray-600">
                <img
                  src={editMember.image}
                  alt={editMember.name?.en || "Member Photo"}
                  className="object-contain h-20 rounded shadow-sm"
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
              type="file"
              accept="image/*"
              multiple={false}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              {...register("image", { required: !isEditingSession })}
            />
          </div>

          {/* Simple file name display */}
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
            "Update Team Member"
          ) : (
            "Create Team Member"
          )}
        </button>
      </div>
    </form>
  );
}

export default MemberForm;
