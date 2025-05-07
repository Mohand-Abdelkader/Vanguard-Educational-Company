import { User, Mail, Phone, Briefcase, FileText, Send } from "lucide-react";

function RequestFrom() {

  //bg-white dark:bg-gray-900 pt-20 pb-10
  return (
    <div className="bg-white dark:bg-gray-900 pt-10 pb-1">

    <div className=" max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden my-20">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Form information */}
        <div className="bg-primary p-8 text-white md:w-1/3">
          <h2 className="text-2xl font-bold mb-6">Join Our Team</h2>
          <p className="mb-8 opacity-90">
            We're always looking for talented individuals to join our
            educational journey. Fill out this form and we'll get back to you
            soon.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-3 h-5 w-5 opacity-80" />
              <span>careers@vanguard.edu</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 h-5 w-5 opacity-80" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-3 h-5 w-5 opacity-80" />
              <span>Mon-Fri: 9AM - 5PM</span>
            </div>
          </div>
        </div>

        {/* Right side - Form fields */}
        <div className="p-8 md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
            Personal Information
          </h3>

          <div className="space-y-6">
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
                    placeholder="John Doe"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                </div>
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
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                </div>
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
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Position
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option value="">Select a position</option>
                  <option value="teacher">Teacher</option>
                  <option value="administrator">Administrator</option>
                  <option value="counselor">Counselor</option>
                  <option value="it">IT Specialist</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Cover Letter / Additional Information
              </label>
              <textarea
                rows="4"
                placeholder="Tell us why you'd like to join our team..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                ></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy-policy"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
              <label
                htmlFor="privacy-policy"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  terms of service
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-md shadow-sm transition-colors duration-200"
              >
              <Send className="h-5 w-5 mr-2" />
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
              </div>
  );
}

export default RequestFrom;
