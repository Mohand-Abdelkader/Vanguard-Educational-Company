import { useForm } from "react-hook-form";
import { useCreateAdmission } from "../../hooks/admissionHooks/useAdmission";
import { useTranslation } from "react-i18next";

function AdmissionForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createAdmission, isPending } = useCreateAdmission();

  const onSubmit = (data) => {
    createAdmission(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-4xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.firstName.label")}
          </label>
          <input
            type="text"
            placeholder={t("admissionForm.fields.firstName.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("firstName", {
              required: t("admissionForm.fields.firstName.error"),
              minLength: {
                value: 2,
                message: t("admissionForm.fields.firstName.minLength"),
              },
            })}
          />
          {errors?.firstName?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.firstName.message}
            </span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.lastName.label")}
          </label>
          <input
            type="text"
            placeholder={t("admissionForm.fields.lastName.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("lastName", {
              required: t("admissionForm.fields.lastName.error"),
              minLength: {
                value: 2,
                message: t("admissionForm.fields.lastName.minLength"),
              },
            })}
          />
          {errors?.lastName?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.lastName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.email.label")}
          </label>
          <input
            type="email"
            placeholder={t("admissionForm.fields.email.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("email", {
              required: t("admissionForm.fields.email.error"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("admissionForm.fields.email.invalid"),
              },
            })}
          />
          {errors?.email?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.phone.label")}
          </label>
          <input
            type="tel"
            placeholder={t("admissionForm.fields.phone.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("phone", {
              required: t("admissionForm.fields.phone.error"),
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: t("admissionForm.fields.phone.invalid"),
              },
            })}
          />
          {errors?.phone?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.phone.message}
            </span>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.city.label")}
          </label>
          <input
            type="text"
            placeholder={t("admissionForm.fields.city.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("city", { required: t("admissionForm.fields.city.error") })}
          />
          {errors?.city?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.city.message}
            </span>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
            {t("admissionForm.fields.country.label")}
          </label>
          <input
            type="text"
            placeholder={t("admissionForm.fields.country.placeholder")}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm dark:bg-accent/20 dark:text-white"
            {...register("country", { required: t("admissionForm.fields.country.error") })}
          />
          {errors?.country?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.country.message}
            </span>
          )}
        </div>
      </div>

      {/* Preferred Communication Method */}
      <div className="flex flex-col">
        <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
          {t("admissionForm.fields.communicationMethod.label")}
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white dark:bg-accent/20 dark:text-white"
          {...register("communicationMethod", {
            required: t("admissionForm.fields.communicationMethod.error"),
          })}
        >
          <option value="">{t("admissionForm.fields.communicationMethod.placeholder")}</option>
          <option value="whatsapp">{t("admissionForm.fields.communicationMethod.options.whatsapp")}</option>
          <option value="telegram">{t("admissionForm.fields.communicationMethod.options.telegram")}</option>
          <option value="email">{t("admissionForm.fields.communicationMethod.options.email")}</option>
        </select>
        {errors?.communicationMethod?.message && (
          <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
            ❌ {errors.communicationMethod.message}
          </span>
        )}
      </div>

      {/* Expert Consultation */}
      <div className="flex flex-col">
        <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
          {t("admissionForm.fields.consultation.label")}
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white dark:bg-accent/20 dark:text-white"
          {...register("needConsultation", {
            required: t("admissionForm.fields.consultation.error"),
          })}
        >
          <option value="">{t("admissionForm.fields.consultation.placeholder")}</option>
          <option value="yes">{t("admissionForm.fields.consultation.options.yes")}</option>
          <option value="no">{t("admissionForm.fields.consultation.options.no")}</option>
        </select>
        {errors?.needConsultation?.message && (
          <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
            ❌ {errors.needConsultation.message}
          </span>
        )}
      </div>

      {/* Education Grant */}
      <div className="flex flex-col">
        <label className="text-left mb-2 font-medium text-gray-700 dark:text-gray-200">
          {t("admissionForm.fields.grant.label")}
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white dark:bg-accent/20 dark:text-white"
          {...register("needGrant", { required: t("admissionForm.fields.grant.error") })}
        >
          <option value="">{t("admissionForm.fields.grant.placeholder")}</option>
          <option value="yes">{t("admissionForm.fields.grant.options.yes")}</option>
          <option value="no">{t("admissionForm.fields.grant.options.no")}</option>
        </select>
        {errors?.needGrant?.message && (
          <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
            ❌ {errors.needGrant.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-4 text-white bg-primary hover:bg-primary-dark dark:bg-primary/90 dark:hover:bg-primary rounded-lg transition duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl font-semibold text-lg"
      >
        {isPending ? t("admissionForm.submit.submitting") : t("admissionForm.submit.button")}
      </button>
    </form>
  );
}

export default AdmissionForm;
