import { useForm } from "react-hook-form";
import { useCreateAdmission } from "../../hooks/admissionHooks/useAdmission";

function AdmissionForm() {
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
          <label className="text-left mb-2 font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
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
          <label className="text-left mb-2 font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
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
          <label className="text-left mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
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
          <label className="text-left mb-2 font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                message: "Invalid phone number",
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
          <label className="text-left mb-2 font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            placeholder="Enter your city"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("city", { required: "City is required" })}
          />
          {errors?.city?.message && (
            <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
              ❌ {errors.city.message}
            </span>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col">
          <label className="text-left mb-2 font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            placeholder="Enter your country"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
            {...register("country", { required: "Country is required" })}
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
        <label className="text-left mb-2 font-medium text-gray-700">
          Choose a Messenger for communication
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white"
          {...register("communicationMethod", {
            required: "Please select a communication method",
          })}
        >
          <option value="">Select your preferred communication method</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="telegram">Telegram</option>
          <option value="email">Email</option>
        </select>
        {errors?.communicationMethod?.message && (
          <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
            ❌ {errors.communicationMethod.message}
          </span>
        )}
      </div>

      {/* Expert Consultation */}
      <div className="flex flex-col">
        <label className="text-left mb-2 font-medium text-gray-700">
          Would you like an expert consultation with the admission process?
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white"
          {...register("needConsultation", {
            required: "Please select an option",
          })}
        >
          <option value="">Choose your preference</option>
          <option value="yes">Yes, I would like a consultation</option>
          <option value="no">No, thank you</option>
        </select>
        {errors?.needConsultation?.message && (
          <span className="mt-1 text-sm text-left text-red-600 dark:text-red-400">
            ❌ {errors.needConsultation.message}
          </span>
        )}
      </div>

      {/* Education Grant */}
      <div className="flex flex-col">
        <label className="text-left mb-2 font-medium text-gray-700">
          Would you like to receive an Education Grant from Vanguard Educational
          Company?
        </label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm bg-white"
          {...register("needGrant", { required: "Please select an option" })}
        >
          <option value="">Choose your preference</option>
          <option value="yes">Yes, I'm interested in receiving a grant</option>
          <option value="no">No, thank you</option>
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
        className="w-full px-6 py-4 text-white bg-primary hover:bg-primary-dark rounded-lg transition duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl font-semibold text-lg"
      >
        {isPending ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

export default AdmissionForm;
