import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Copyright,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#058088] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Company Name</h4>
            <p className="text-gray-200 text-sm">
              Creating innovative solutions for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#portal"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Shared Portal
                </a>
              </li>
              <li>
                <a
                  href="#commercial"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Commercial Videos
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-[#02b8a9] transition-colors"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#02b8a9] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#02b8a9] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#02b8a9] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#02b8a9] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4e314f] mt-8 pt-8 flex items-center justify-center text-sm text-gray-200">
          <Copyright className="h-4 w-4 mr-2" />
          <p>{new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
