import Button from "./Button";
import Input from "./Input";
import Textarea from "./TextArea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary">
          {t("contact.title")}
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
                {t("contact.getInTouch")}
              </h3>
              <p className="text-white/80 mb-8">
                {t("contact.formDescription")}
              </p>

              <div className="space-y-6 mt-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.email")}
                    </p>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.phone")}
                    </p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">
                      {t("contact.address")}
                    </p>
                    <p>123 Business Street, Suite 100, City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              {t("contact.sendMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.yourName")}
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 dark:bg-accent/50 border-gray-200 dark:border-gray-700 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("contact.yourEmail")}
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 dark:bg-accent/50 border-gray-200 dark:border-gray-700 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.subject")}
                </label>
                <Input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full bg-gray-50 dark:bg-accent/50 border-gray-200 dark:border-gray-700 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t("contact.message")}
                </label>
                <Textarea
                  placeholder="Tell us about your inquiry..."
                  className="w-full min-h-[150px] bg-gray-50 dark:bg-accent/50 border-gray-200 dark:border-gray-700 rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                {t("contact.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
