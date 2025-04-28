import Button from "./Button";
import Input from "./Input";
import Textarea from "./TextArea";
import { Mail, Phone, MapPin } from "lucide-react";
function ContactUs() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Contact Information */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-900">Get in Touch</h3>
        <p className="text-gray-600">
          We'd love to hear from you. Please fill out this form or shoot us an
          email.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="h-5 w-5 text-green-600" />
            <span>contact@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="h-5 w-5 text-green-600" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="h-5 w-5 text-green-600" />
            <span>123 Business Street, Suite 100, City, ST 12345</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input type="text" placeholder="Your Name" className="w-full" />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" className="w-full" />
        </div>
        <div>
          <Input type="text" placeholder="Subject" className="w-full" />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            className="w-full min-h-[150px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}

export default ContactUs;
