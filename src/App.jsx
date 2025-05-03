import { HashRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/NotFound";
import CommercialVideos from "./features/videos/CommercialVideos";
import Blog from "./features/blogs/Blog";
import BlogPage from "./features/blogs/BlogPage";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import AdminLayout from "./features/admin/AdminLayout";
import MainLayout from "./ui/MainLayout";

import Dashboard from "./features/admin/Dashboard";
import AdminService from "./features/projectService/AdminService";
import AdminTeam from "./features/teamMember/AdminTeam";
import AdminActivities from "./features/activities/AdminActivities";
import AdminBlogs from "./features/blogs/AdminBlogs";
import AdminLogos from "./features/logos/AdminLogos";
import AdminRequests from "./features/requests/AdminRequests";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          {/* Admin routes - no navbar/footer */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="services" element={<AdminService />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="activities" element={<AdminActivities />} />

            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="logos" element={<AdminLogos />} />
            <Route path="requests" element={<AdminRequests />} />

            {/* Add more admin routes as needed */}
          </Route>

          {/* Main app routes - with navbar/footer */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<AppLayout />} />
            <Route path="commercial" element={<CommercialVideos />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blogs/:title" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
