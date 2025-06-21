import { useEffect, useRef } from "react";
import {
  X,
  User,
  Mail,
  MessageSquare,
  Phone,
  FileText,
  Vote,
  Flag,
} from "lucide-react";

function AdmissionInfo({ isOpen, onClose, value }) {
  const modalRef = useRef(null);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4 z-10 transform transition-all duration-300 ease-in-out"
        style={{ animation: "modalFadeIn 0.3s" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-primary/10 dark:bg-primary/20 rounded-t-lg">
          <h3 className="text-lg font-semibold text-primary dark:text-white flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Admission Details
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none bg-white/80 dark:bg-gray-700/80 p-1.5 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {`${value.firstName} ${value.lastName}`}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium text-gray-900 dark:text-white break-all">
                {value.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {value.phone}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <Flag className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Address
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {`City: ${value.city} , Country : ${value.country}`}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                communication Method
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {value.communicationMethod}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <Vote className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Need expert consultation
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {value.needConsultation}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 pb-3 border-b dark:border-gray-700">
            <Vote className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive an Education Grant
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {value.needGrant}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdmissionInfo;
