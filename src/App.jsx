import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import CommercialVideos from "./features/videos/CommercialVideos";
import Blog from "./features/blogs/Blog";
import BlogPage from "./features/blogs/BlogPage";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import AdminLayout from "./features/admin/AdminLayout";
import MainLayout from "./ui/MainLayout";
import MemberDetails from "./features/teamMember/MemberDetails";
import Dashboard from "./features/admin/Dashboard";
import AdminService from "./features/projectService/AdminService";
import AdminTeam from "./features/teamMember/AdminTeam";
import AdminActivities from "./features/activities/AdminActivities";
import AdminBlogs from "./features/blogs/AdminBlogs";
import AdminLogos from "./features/logos/AdminLogos";
import AdminRequests from "./features/requests/AdminRequests";
import ItemDetails from "./ui/ItemDetails";
import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "sonner";
import RequestFrom from "./features/requests/RequestFrom";
import ScrollToTop from "./ui/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import WhatsAppButton from "./ui/WhatsApp";
import AdminLogin from "./features/auth/AdminLogin";
import ProtectedRoute from "./ui/ProtectedRoute";
import NobelPage from "./features/admission/NobelPage";
import AdminAdmission from "./features/admission/AdminAdmission";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});

// Create a wrapper component to handle the WhatsApp button visibility
function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && (
        <WhatsAppButton
          phoneNumber="+966544862844"
          message="Hello! I'm interested in Vanguard Educational Company services."
        />
      )}
      <Routes>
        {/* Admin routes - protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="services" element={<AdminService />} />
          <Route path="team" element={<AdminTeam />} />
          <Route path="activities" element={<AdminActivities />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="logos" element={<AdminLogos />} />
          <Route path="requests" element={<AdminRequests />} />
          <Route path="admission" element={<AdminAdmission />} />
        </Route>

        {/* Main app routes - with navbar/footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<AppLayout />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="commercial" element={<CommercialVideos />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/category/:category" element={<Blog />} />
          <Route path="University-Partnership" element={<NobelPage />} />
          <Route path="member/:title" element={<MemberDetails />} />
          <Route path="service/:serviceName" element={<ItemDetails />} />
          <Route path="activity/:activityName" element={<ItemDetails />} />
          <Route path="Request" element={<RequestFrom />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <AppContent />
      </HashRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "##F9FAFB",
            color: "##1F2937",
          },
        }}
      />
      <Sonner richColors position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
