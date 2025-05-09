import { useEffect, useRef } from "react";
import { X, User, Mail, MessageSquare, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useCreateRequest } from "../../hooks/requestsCustomHooks/useCreateRequest";
import { useTranslation } from "react-i18next";

function ItemRequest({ isOpen, onClose, value }) {
  const { createRequest, isCreating } = useCreateRequest();
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  // Handle escape key press
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  function onSubmit(data) {
    createRequest(data, {
      onSuccess: () => {
        reset();
      },
    });
  }
  const isLoading = isSubmitting || isCreating;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="z-10 w-full max-w-md mx-4 transition-all duration-300 ease-in-out transform bg-white rounded-lg shadow-xl dark:bg-gray-800"
        style={{ animation: "modalFadeIn 0.3s" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("contact.title")}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.yourName")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder={t("contact.yourNamePlaceholder")}
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

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.yourEmail")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder={t("contact.yourEmailPlaceholder")}
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
            {/* phone */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.yourPhoneNumber")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder={t("contact.phoneNumberPlaceholder")}
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

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("contact.message")}
              </label>
              <div className="relative">
                <div className="absolute flex items-start pointer-events-none top-3 left-3">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <textarea
                  id="messageBody"
                  rows="4"
                  placeholder={t("contact.messagePlaceholder")}
                  {...register("messageBody", {})}
                  className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
            </div>

            <div className="hidden space-y-2">
              <input
                id="serviceRequested"
                type="hidden"
                value={value}
                {...register("serviceRequested", {
                  required: t("validation.subjectRequired"),
                })}
                className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            {/* Footer */}
            <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700">
              <input
                type="reset"
                value={t("contact.close")}
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              />

              <input
                disabled={isLoading}
                value={
                  isLoading ? t("contact.submitting") : t("contact.submit")
                }
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md shadow-sm bg-primary hover:bg-primary-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemRequest;
