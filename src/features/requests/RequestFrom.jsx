import { User, Mail, Phone, Send, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useCreateRequest } from "../../hooks/requestsCustomHooks/useCreateRequest";
function RequestFrom() {
  const { createRequest, isCreating } = useCreateRequest();
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
    <div className="bg-white dark:bg-gray-900 pt-10 pb-1">
      <div className=" max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden my-20">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Form information */}
          <div className="bg-primary p-8 text-white md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
            <p className="mb-8 opacity-90">
              We're always looking for talented individuals to join our
              educational journey. Fill out this form and we'll get back to you
              soon.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 opacity-80" />
                <span>rashed.mohamed@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 opacity-80" />
                <span>+966 54 486 2844</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 opacity-80" />
                <span>KSA -jeddah qurish street</span>
              </div>
            </div>
          </div>

          {/* Right side - Form fields */}
          <div className="p-8 md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Personal Information
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "This field is required",
                      })}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  {errors?.email?.message && (
                    <span className="mt-1 text-sm text-red-600 dark:text-red-400">
                      ❌ {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      {...register("phoneNumber", {
                        required: "Phone is required",
                      })}
                      className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                    Position
                  </label>
                  <select
                    id="position"
                    {...register("position", {
                      required: "required",
                    })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a position</option>
                    <option value="teacher">Teacher</option>
                    <option value="administrator">Administrator</option>
                    <option value="counselor">Counselor</option>
                    <option value="it">IT Specialist</option>
                    <option value="other">Other</option>
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
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="messageBody"
                  rows="4"
                  {...register("messageBody", {})}
                  placeholder="Tell us why you'd like to join our team..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              <div className="space-y-2 hidden">
                <input
                  id="serviceRequested"
                  type="hidden"
                  value="Join our Team Request"
                  {...register("serviceRequested", {
                    required: "this felid is required",
                  })}
                  placeholder="your number, with country code"
                  className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <button
                disabled={isCreating}
                type="submit"
                className="w-full flex justify-center items-center px-4 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md shadow-sm transition-colors duration-200 disabled:bg-slate-400"
              >
                <Send className="h-5 w-5 mr-2" />
                {isCreating ? "Submitting ... " : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestFrom;
