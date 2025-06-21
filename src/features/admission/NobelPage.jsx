import AdmissionForm from "./AdmissionForm";
import { GraduationCap, Globe, Users } from "lucide-react";

function NobelPage() {
  return (
    <div className="mt-10 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-accent">
        <div className="absolute inset-0 bg-[url('https://old.duan.edu.ua/international/wp-content/uploads/2022/11/city_and_university_31.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight">Your Global Future Starts Here</h1>
          <p className="mb-8 text-xl font-light">World-Class Education, Right Where You Are</p>
          <button className="px-8 py-3 font-bold text-white rounded-full transition duration-300 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent">Dual Diplomas</h3>
            <p className="text-gray-600">International Degrees with Local Access</p>
          </div>
          <div className="p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent">Exchange Programs</h3>
            <p className="text-gray-600">No Borders, No Limits — Just Opportunity</p>
          </div>
          <div className="p-8 text-center rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <Globe className="w-12 h-12 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent">International Recognition</h3>
            <p className="text-gray-600">Global Opportunities Await</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-gradient-to-br from-accent to-accent/90">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-white">Apply Now and Get Your Grant for 2025!</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NobelPage;