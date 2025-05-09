import * as LucideIcons from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ItemRequest from "../features/requests/ItemRequest";
function ItemDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const item = location.state;
  const { i18n } = useTranslation();
  const language = i18n.language;
  const isArabic = language === "ar";

  // Dynamically get the icon component
  const IconComponent = item?.icon
    ? LucideIcons[item.icon]
    : LucideIcons.Layers;
  //   <div className="bg-white dark:bg-gray-900 pt-20 pb-10">
  if (!item) {
    return (
      <div className=" container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
            {isArabic ? "لم يتم العثور على العنصر" : "Item not found"}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container bg-white dark:bg-gray-900 pt-20 pb-10 max-w-full px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Header with icon */}
            <div className="bg-gradient-to-r from-primary/90 to-primary-dark p-8 relative">
              <div className="absolute inset-0 opacity-10"></div>
              <div className="relative z-10 flex items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-5 rtl:ml-5 rtl:mr-0">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-white" />
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {item.title?.[language] || ""}
                </h1>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {isArabic ? "الوصف" : "Description"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {item.description?.[language] || ""}
                </p>

                {item.info && item.info[language] && (
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {isArabic ? "معلومات إضافية" : "Additional Information"}
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-5 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.info[language]}
                      </p>
                    </div>
                  </div>
                )}

                {/* Request Service Button */}
                <div className="mt-10 flex justify-center">
                  <button
                    className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
                    onClick={() => setIsOpen((i) => !i)}
                  >
                    <LucideIcons.MessageSquare className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    {isArabic ? "طلب الخدمة" : "Request Service"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <ItemRequest
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            value={item.title.en}
          />
        )}
      </div>
    </>
  );
}

export default ItemDetails;
