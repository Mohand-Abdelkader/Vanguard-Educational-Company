import Button from "./Button";
import Input from "./Input";
import Textarea from "./TextArea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { useCreateRequest } from "../hooks/requestsCustomHooks/useCreateRequest";

function ContactUs() {
  const { createRequest, isCreating } = useCreateRequest();

  console.log(isCreating);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    createRequest(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  const isLoading = isCreating || isSubmitting;
  // Define styles for error messages based on your component's color scheme
  const errorTextStyle =
    "text-red-500 dark:text-red-400 text-sm mt-1 flex items-center gap-1";
  const inputErrorBorderStyle = "border-red-500 dark:border-red-400";
  const normalInputBorderStyle = "border-gray-200 dark:border-gray-700";
  // const isLoading = isSubmitting || isCreating;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary dark:text-white">
          {t("contact.title", "Contact Us")}
        </h2>
      </div>

      <div className="bg-white dark:bg-accent/30 rounded-2xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-primary/90 dark:bg-primary/80 text-white p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10">
              <MessageSquare className="h-10 w-10 mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                {t("contact.getInTouch", "Get in Touch")}
              </h3>
              <p className="text-white/80 mb-8">
                {t(
                  "contact.formDescription",
                  "Fill out the form and our team will get back to you as soon as possible."
                )}
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.email", "Email")}
                    </p>
                    <p>rashed.mohamed@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.phone", "Phone")}
                    </p>
                    <p>+966 54 486 2844</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.address", "Address")}
                    </p>
                    <p>KSA -jeddah qurish street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {t("contact.sendMessage", "Send a Message")}
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 dark:text-white"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("contact.yourName", "Your Name")} *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t("contact.yourNamePlaceholder", "John Doe")}
                    className={`w-full bg-gray-50 dark:bg-accent/50 rounded-lg ${
                      errors.name
                        ? inputErrorBorderStyle
                        : normalInputBorderStyle
                    }`}
                    {...register("name", {
                      required: t(
                        "validation.nameRequired",
                        "Name is required"
                      ),
                    })}
                  />
                  {errors.name && (
                    <p className={errorTextStyle}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("contact.yourEmail", "Your Email")} *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t(
                      "contact.yourEmailPlaceholder",
                      "john@example.com"
                    )}
                    className={`w-full bg-gray-50 dark:bg-accent/50 rounded-lg ${
                      errors.email
                        ? inputErrorBorderStyle
                        : normalInputBorderStyle
                    }`}
                    {...register("email", {
                      required: t(
                        "validation.emailRequired",
                        "Email is required"
                      ),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t(
                          "validation.emailInvalid",
                          "Invalid email address"
                        ),
                      },
                    })}
                  />
                  {errors.email && (
                    <p className={errorTextStyle}>{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.yourPhoneNumber", "Phone Number")} *
                </label>
                <Input
                  id="phoneNumber"
                  type="number"
                  placeholder={t(
                    "contact.PhoneNumber",
                    "Phone Number with Your Country Code"
                  )}
                  className={`w-full bg-gray-50 dark:bg-accent/50 rounded-lg ${
                    errors.phoneNumber
                      ? inputErrorBorderStyle
                      : normalInputBorderStyle
                  }`}
                  {...register("phoneNumber", {
                    required: t(
                      "validation.phoneRequired",
                      "Phone is required"
                    ),
                  })}
                />
                {errors.phoneNumber && (
                  <p className={errorTextStyle}>{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="serviceRequested"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.subject", "Subject")} *
                </label>
                <Input
                  id="serviceRequested"
                  type="text"
                  placeholder={t(
                    "contact.subjectPlaceholder",
                    "How can we help you?"
                  )}
                  className={`w-full bg-gray-50 dark:bg-accent/50 rounded-lg ${
                    errors.serviceRequested
                      ? inputErrorBorderStyle
                      : normalInputBorderStyle
                  }`}
                  {...register("serviceRequested", {
                    required: t(
                      "validation.subjectRequired",
                      "Subject is required"
                    ),
                  })}
                />
                {errors.serviceRequested && (
                  <p className={errorTextStyle}>
                    {errors.serviceRequested.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="messageBody"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.message", "Message")} *
                </label>
                <Textarea
                  id="messageBody"
                  placeholder={t(
                    "contact.messagePlaceholder",
                    "Tell us about your inquiry..."
                  )}
                  className={`w-full min-h-[150px] bg-gray-50 dark:bg-accent/50 rounded-lg ${
                    errors.messageBody
                      ? inputErrorBorderStyle
                      : normalInputBorderStyle
                  }`}
                  {...register("messageBody", {
                    required: t(
                      "validation.messageRequired",
                      "Message is required"
                    ),
                  })}
                />
                {errors.messageBody && (
                  <p className={errorTextStyle}>{errors.messageBody.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t("contact.submitting", "Sending...")}
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {t("contact.submit", "Send Message")}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
