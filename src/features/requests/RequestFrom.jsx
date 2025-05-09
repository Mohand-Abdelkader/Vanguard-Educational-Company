import { User, Mail, Phone, Send, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useCreateRequest } from "../../hooks/requestsCustomHooks/useCreateRequest";
import { useTranslation } from "react-i18next";

function RequestFrom() {
  const { createRequest, isCreating } = useCreateRequest();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    createRequest(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  return (
    <div className="pt-10 pb-1 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto my-20 overflow-hidden bg-white shadow-lg dark:bg-gray-800 rounded-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Form information */}
          <div className="p-8 text-white bg-primary md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold">{t("request.title")}</h2>
            <p className="mb-8 opacity-90">{t("request.description")}</p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 opacity-80" />
                <span>rashed.mohamed@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 opacity-80" />
                <span>+966 54 486 2844</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 opacity-80" />
                <span>KSA -jeddah qurish street</span>
              </div>
            </div>
          </div>

          {/* Right side - Form fields */}
          <div className="p-8 md:w-2/3">
            <h3 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">
              {t("request.personalInfo")}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("request.fullName")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      placeholder={t("request.fullNamePlaceholder")}
                      {...register("name", {
                        required: t("validation.nameRequired"),
                      })}
                      className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  {errors?.name?.message && (
                    <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                      ❌ {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("request.email")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder={t("request.emailPlaceholder")}
                      {...register("email", {
                        required: t("validation.emailRequired"),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t("validation.emailInvalid"),
                        },
                      })}
                      className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  {errors?.email?.message && (
                    <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                      ❌ {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("request.phone")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Phone className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={t("request.phonePlaceholder")}
                      {...register("phoneNumber", {
                        required: t("validation.phoneRequired"),
                      })}
                      className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  {errors?.phoneNumber?.message && (
                    <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                      ❌ {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("request.position")}
                  </label>
                  <select
                    id="position"
                    {...register("position", {
                      required: t("validation.positionRequired"),
                    })}
                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">{t("request.selectPosition")}</option>
                    <option value="teacher">
                      {t("request.positions.teacher")}
                    </option>
                    <option value="administrator">
                      {t("request.positions.administrator")}
                    </option>
                    <option value="counselor">
                      {t("request.positions.counselor")}
                    </option>
                    <option value="it">{t("request.positions.it")}</option>
                    <option value="other">
                      {t("request.positions.other")}
                    </option>
                  </select>
                  {errors?.position?.message && (
                    <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                      ❌ {errors.position.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t("request.coverLetter")}
                </label>
                <textarea
                  id="messageBody"
                  rows="4"
                  {...register("messageBody", {})}
                  placeholder={t("request.coverLetterPlaceholder")}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <div className="hidden space-y-2">
                <input
                  id="serviceRequested"
                  type="hidden"
                  value="Join our Team Request"
                  {...register("serviceRequested", {
                    required: t("validation.subjectRequired"),
                  })}
                  className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                disabled={isCreating}
                type="submit"
                className="flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-colors duration-200 rounded-md shadow-sm bg-primary hover:bg-primary-dark disabled:bg-slate-400"
              >
                <Send className="w-5 h-5 mr-2" />
                {isCreating ? t("request.submitting") : t("request.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestFrom;
